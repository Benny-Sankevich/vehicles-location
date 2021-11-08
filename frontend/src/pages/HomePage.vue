<template>
  <q-page class="bg-grey-4 window-width row justify-center items-center">
    <div class="fixed-center" style="width: 750px">
      <q-card flat bordered>
        <q-item>
          <q-item-section avatar>
            <q-avatar size="120px" font-size="52px">
              <img src="../../public/images/Benny.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label><h4>Benny Sankevich</h4></q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-card-section>
          <q-list style="width: 350px">
            <q-item v-ripple>
              <q-item-section avatar>
                <q-item-section side
                  >This Website use the functions list below:</q-item-section
                >
              </q-item-section>
            </q-item>

            <q-item v-ripple :active="active">
              <q-item-section avatar>
                <q-icon name="radio_button_unchecked" />
              </q-item-section>
              <q-item-section side>Client-Side: VueJs</q-item-section>
            </q-item>
            <q-item v-ripple :active="active">
              <q-item-section avatar>
                <q-icon name="radio_button_unchecked" />
              </q-item-section>
              <q-item-section side>Server-Side: NodeJs</q-item-section>
            </q-item>
            <q-item v-ripple :active="active">
              <q-item-section avatar>
                <q-icon name="radio_button_unchecked" />
              </q-item-section>
              <q-item-section side>Database: MongoDB</q-item-section>
            </q-item>
          </q-list>
          <div class="q-pa-md q-gutter-sm">
            <q-btn
              round
              clickable
              type="a"
              target="_blank"
              href="https://www.linkedin.com/in/benny-sankevich"
            >
              <q-avatar size="42px">
                <q-img src="../../public/images/linkedin.png" />
              </q-avatar>
            </q-btn>
            <q-btn
              round
              clickable
              type="a"
              target="_blank"
              href="https://github.com/Benny-Sankevich"
            >
              <q-avatar size="42px">
                <img src="../../public/images/GitHub.png" />
              </q-avatar>
            </q-btn>
            <q-avatar>
              <q-icon
                clickable
                tag="a"
                target="_blank"
                href="mailto:bennysankevich@gmail.com"
                name="email"
                style="font-size: 3rem"
              />
            </q-avatar>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
