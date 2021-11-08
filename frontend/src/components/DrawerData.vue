<template>
  <div>
    <q-toolbar class="bg-secondary q-mb-md">
      <q-toolbar-title class="text-white q-pt-xs">
        <div class="text-weight-medium drawer_title">Locations</div>
      </q-toolbar-title>
      <q-btn @click="closeDrawer" flat round dense color="white" icon="close" />
    </q-toolbar>
    <div v-if="vehiclesData?.length > 0">
      <q-list
        bordered
        separator
        v-for="(vehicle, index) in vehiclesData"
        :key="index"
      >
        <q-item clickable v-ripple :active="active">
          <q-item-section avatar>
            <q-icon name="airport_shuttle" />
          </q-item-section>
          <q-item-section>{{ vehicle.title }}</q-item-section>
          <q-item-section side>{{ index + 1 }}</q-item-section>
        </q-item>
      </q-list>
    </div>
    <div v-if="vehiclesData?.length == 0">
      <q-list bordered separator :key="vehiclesData.length">
        <q-item clickable v-ripple :active="active">
          <q-item-section avatar>
            <q-icon name="airport_shuttle" />
          </q-item-section>
          <q-item-section side>No cars found.</q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IVehicleLocationTitle } from '../models/models';

export default defineComponent({
  props: {
    vehiclesData: {
      type: Object as PropType<IVehicleLocationTitle>,
      required: true,
    },
  },
  emits: ['onCloseDrawer'],
  setup(props, { emit }) {
    const closeDrawer = () => {
      emit('onCloseDrawer', false);
    };
    return {
      closeDrawer,
    };
  },
});
</script>
