<template>
  <q-page class="bg-grey-4 row justify-center items-center">
    <q-layout view="hHh lpR fFf">
      <q-drawer v-model="leftDrawerOpen" side="left" bordered>
        <DrawerData
          :vehiclesData="vehiclesData"
          @onCloseDrawer="closeDrawerLedtSide"
        />
      </q-drawer>

      <q-page-container>
        <div class="q-pa-md q-gutter-sm">
          <q-btn
            v-if="!isPolygonDrawingOngoing && !leftDrawerOpen"
            color="primary"
            icon="play_arrow"
            @click="enableDrawing"
            label="Start Drawing"
          />
          <q-btn
            v-if="isPolygonDrawingOngoing && !leftDrawerOpen"
            color="deep-orange"
            icon="clear"
            @click="clearDrawing"
            label="Cancal Drawing"
          />
          <q-btn
            v-if="
              isPolygonDrawingOngoing &&
              triangleCoords.length > 2 &&
              !leftDrawerOpen
            "
            color="secondary"
            icon="done"
            @click="showVehiclesData"
            label="Show Cars"
          />
          <span v-if="isPolygonDrawingOngoing && triangleCoords.length < 3"
            >You must select at least 3 points on the map</span
          >
        </div>
        <GoogleMap
          :api-key="apiKey"
          style="width: 100%; height: 500px"
          :center="center"
          :zoom="15"
          @click="onMapClick"
        >
          <Marker
            :options="markerItem"
            v-for="markerItem in vehiclesLocationData"
            :key="markerItem.title"
          />

          <Polygon
            :options="polygonOptions"
            v-if="triangleCoords.length > 2 && renderPolygon"
          />
          <Circle
            v-for="(circleOpts, index) in circlesOptions"
            :options="circleOpts"
            :key="index"
          />
        </GoogleMap>
      </q-page-container>
    </q-layout>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { GoogleMap, Marker, Polygon, Circle } from 'vue3-google-map';
import DrawerData from '../components/DrawerData.vue';
import { IMarkerOptions } from '../models/models';
import { apiService } from '../core/apiService';
export default defineComponent({
  components: { GoogleMap, Marker, Polygon, DrawerData, Circle },
  setup() {
    const apiKey = process.env.apiKey;
    let leftDrawerOpen = ref(false);
    let vehiclesLocationData = ref([] as IMarkerOptions[]);
    let renderPolygon = ref(false);
    let isPolygonDrawingOngoing = ref(false);
    let vehiclesData = ref(null);
    let triangleCoords = ref([]);

    // const cities = {
    //   chicago: {
    //     lat: 51.4743499756,
    //     lng: -0.0410833322,
    //   },
    //   newyork: {
    //     lat: 51.4694976807,
    //     lng: -0.0493916683,
    //   },
    // };

    // const circles = {};

    // for (const key in cities) {
    //   circles[key] = {
    //     center: cities[key],
    //     radius: 25,
    //     strokeColor: '#FF0000',
    //     strokeOpacity: 0.8,
    //     strokeWeight: 2,
    //     fillColor: '#FF0000',
    //     fillOpacity: 0.35,
    //   };
    // }

    let circlesOptions = computed(() => {
      return triangleCoords.value.map((x) => {
        return {
          center: x,
          radius: 25,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
        };
      });
    });

    apiService
      .getAllVehiclesLocation()
      .then((res) => (vehiclesLocationData.value = res));

    let center = vehiclesLocationData.value.length
      ? vehiclesLocationData.value[0].position
      : { lat: 51.4694976807, lng: -0.0493916683 };

    let polygonOptions = computed(() => {
      return {
        paths: triangleCoords.value,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
      };
    });

    const setIsPolygonDrawingOngoing = (value: boolean) => {
      isPolygonDrawingOngoing.value = value;
    };

    const onMapClick = (evt: any) => {
      if (isPolygonDrawingOngoing.value) {
        renderPolygon.value = false;

        triangleCoords.value.push({
          lat: evt.latLng.lat(),
          lng: evt.latLng.lng(),
        });
        setTimeout(() => (renderPolygon.value = true), 10);
      }
    };
    const clearDrawing = () => {
      setIsPolygonDrawingOngoing(false);
      triangleCoords.value = [];
      renderPolygon.value = false;
    };
    const enableDrawing = () => {
      setIsPolygonDrawingOngoing(true);
    };
    const showVehiclesData = async () => {
      vehiclesData.value =
        await apiService.getVehiclesLocationByUserDrawingAsync(
          triangleCoords.value
        );
      setIsPolygonDrawingOngoing(false);
      leftDrawerOpen.value = true;
    };
    const closeDrawerLedtSide = () => {
      leftDrawerOpen.value = false;
      clearDrawing();
    };

    return {
      apiKey,
      circlesOptions,
      vehiclesData,
      onMapClick,
      clearDrawing,
      enableDrawing,
      showVehiclesData,
      closeDrawerLedtSide,
      triangleCoords,
      polygonOptions,
      renderPolygon,
      center,
      vehiclesLocationData,
      leftDrawerOpen,
      isPolygonDrawingOngoing,
    };
  },
});
</script>
