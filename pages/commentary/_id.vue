<template>
  <div>
    <div class="index2">
      <v-btn outlined
        ><v-icon
          dark
          center
          class="my-3"
          @click="$router.push({ path: '/commentary' })"
          >mdi-backburger</v-icon
        ></v-btn
      >
      <div class="text1 mt-3">{{ $route.query.name }}</div>
      <div class="d-flex mt-3">
        <p class="mr-2">Sound:</p>
        <v-switch v-model="switch1" class="ml-2 mr-10"></v-switch>
        <p class="mx-2">Text:</p>
        <v-switch class="mx-2" v-model="switch2"></v-switch>
      </div>
      <div v-if="switch1 || switch2">
        <div class="d-flex mt-3">
          <p class="mr-2">Shortcuts Enabled:</p>
          <v-switch v-model="switch3" class="ml-2"></v-switch>
        </div>
        <v-row>
          <v-col md="2">
            <v-btn
              class="buttonsize"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('Ball Start')"
              ><div class="d-flex flex-column">
                <span>Ball Start</span><v-divider></v-divider>(.)
              </div></v-btn
            >
          </v-col>
          <v-col md="2">
            <v-btn
              class="buttonsize"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('0 Runs')"
              ><div class="d-flex flex-column">
                <span>0 RUns</span><v-divider></v-divider>(0)
              </div></v-btn
            >
          </v-col>
          <v-col md="2">
            <v-btn
              class="buttonsize"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('1 Run')"
              ><div class="d-flex flex-column">
                <span>1 Run</span><v-divider></v-divider>(1)
              </div></v-btn
            >
          </v-col>
          <v-col md="2">
            <v-btn
              class="buttonsize"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('2 Runs')"
              ><div class="d-flex flex-column">
                <span>2 Runs</span><v-divider></v-divider>(2)
              </div></v-btn
            >
          </v-col>
          <v-col md="2">
            <v-btn
              class="buttonsize"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('3 Runs')"
              ><div class="d-flex flex-column">
                <span>3 Runs</span><v-divider></v-divider>(3)
              </div></v-btn
            >
          </v-col>
          <v-col md="2">
            <v-btn
              class="buttonsize"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('4 Runs')"
              ><div class="d-flex flex-column">
                <span>4 Runs</span><v-divider></v-divider>(4)
              </div></v-btn
            >
          </v-col>
          <v-col md="2">
            <v-btn
              class="buttonsize"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('6 Runs')"
              ><div class="d-flex flex-column">
                <span>6 Runs</span><v-divider></v-divider>(6)
              </div></v-btn
            >
          </v-col>
          <v-col md="2">
            <v-btn
              class="buttonsize"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('Wicket')"
              ><div class="d-flex flex-column">
                <span>Wicket</span><v-divider></v-divider>(5)
              </div></v-btn
            >
          </v-col>
          <v-col md="2">
            <v-btn
              class="buttonsize"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('Wide')"
              ><div class="d-flex flex-column">
                <span>Wide</span><v-divider></v-divider>(/)
              </div></v-btn
            >
          </v-col>
          <v-col md="2">
            <v-btn
              class="buttonsize"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('No Ball')"
              ><div class="d-flex flex-column">
                <span>No Ball</span><v-divider></v-divider>(*)
              </div></v-btn
            >
          </v-col>
          <v-col md="2">
            <v-btn
              class="buttonsize"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('Freehit')"
              ><div class="d-flex flex-column">
                <span>Freehit</span><v-divider></v-divider>(-)
              </div></v-btn
            >
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      switch1: false,
      switch2: false,
      switch3: true,
    }
  },
  mounted() {
    this._keyListener = function (e) {
      if (this.switch3 && (this.switch1 || this.switch2)) {
        if (e.key === '.') {
          this.triger('Ball Start')
        }
        if (e.key === '0') {
          this.triger('0 Runs')
        }
        if (e.key === '1') {
          this.triger('1 Run')
        }
        if (e.key === '2') {
          this.triger('2 Runs')
        }
        if (e.key === '3') {
          this.triger('3 Runs')
        }
        if (e.key === '4') {
          this.triger('4 Runs')
        }
        if (e.key === '6') {
          this.triger('6 Runs')
        }
        if (e.key === '5') {
          this.triger('Wicket')
        }
        if (e.key === '/') {
          this.triger('Wide')
        }
        if (e.key === '*') {
          this.triger('No Ball')
        }
        if (e.key === '-') {
          this.triger('Freehit')
        }
      }
    }
    document.addEventListener('keydown', this._keyListener.bind(this))
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this._keyListener)
  },
  methods: {
    async triger(com) {
      try {
        const socket_url = process.env.NUXT_ENV_SOCKET_URL
        let obj2 = {}
        obj2.roomName = 'commentaryRoom-' + this.$route.params.id
        obj2.eventName = 'commentary'
        obj2.data = {
          com: com,
          text: this.switch2,
          sound: this.switch1,
        }
        const result = await axios.post(`${socket_url}/callSocket`, obj2, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if (result.status == 200) {
          this.$notifier.showMessage({
            content: 'Commentary Succesfull',
            color: '#4CAF50',
          })
        }
      } catch (error) {
        console.log(error)
        this.$notifier.showMessage({
          content: 'Something went wrong',
          color: '#D50000',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.text1 {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
}
.buttonsize {
  width: 130px;
}
@media only screen and (max-width: 600px) {
  .buttonsize {
    width: 110px;
  }
}
</style>
