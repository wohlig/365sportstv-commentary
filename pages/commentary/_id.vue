<template>
  <div>
    <div class="index2">
      <v-btn outlined @click="$router.push({ path: '/commentary' })"
        ><v-icon dark center class="my-3">mdi-backburger</v-icon></v-btn
      >
      <div class="text1 mt-1">{{ $route.query.name }}</div>
      <div class="d-flex mt-1">
        <p class="mr-2">Sound:</p>
        <v-switch v-model="switch1" class="ml-2 mr-10"></v-switch>
        <p class="mx-2">Text:</p>
        <v-switch class="mx-2" v-model="switch2"></v-switch>
      </div>
      <div v-if="switch1 || switch2">
        <div class="d-flex">
          <p class="mr-2">Shortcuts Enabled:</p>
          <v-switch v-model="switch3" class="ml-2"></v-switch>
        </div>
        <v-row>
          <v-col sm="6" md="6" lg="3">
            <v-btn
              class="buttonsize clickchange"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('Third Umpire')"
              ><div class="d-flex flex-column">
                <span>Third Umpire</span><v-divider></v-divider>(t)
              </div></v-btn
            >
          </v-col>
          <v-col sm="6" md="6" lg="3">
            <v-btn
              class="buttonsize clickchange"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('Not Out')"
              ><div class="d-flex flex-column">
                <span>Not Out</span><v-divider></v-divider>(*)
              </div></v-btn
            >
          </v-col>
          <v-col sm="6" md="6" lg="3">
            <v-btn
              class="buttonsize clickchange"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('Checking')"
              ><div class="d-flex flex-column">
                <span>Checking</span><v-divider></v-divider>(e)
              </div></v-btn
            >
          </v-col>
          <v-col sm="6" md="6" lg="3">
            <v-btn
              class="buttonsize clickchange"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('In The Air')"
              ><div class="d-flex flex-column">
                <span>In The Air</span><v-divider></v-divider>(i)
              </div></v-btn
            >
          </v-col>
        </v-row>
        <div class="d-flex justify-space-between my-3">
          <v-btn class="vertical clickchange" @click="triger('Ball Start')"
            ><div class="d-flex flex-column" style="font: size 0.7rem">
              <span>Start</span><v-divider></v-divider>(Enter)
            </div></v-btn
          >
          <div class="d-flex flex-column justify-space-around">
            <div class="d-flex justify-space-around">
              <v-btn
                class="horizontal clickchange large mr-1"
                x-large
                @click="triger('Wicket')"
                ><div class="d-flex flex-column">
                  <span>Wicket</span><v-divider></v-divider>(5)
                </div></v-btn
              >
              <v-btn
                class="horizontal clickchange large"
                x-large
                @click="triger('Appeal')"
                ><div class="d-flex flex-column">
                  <span>Appeal</span><v-divider></v-divider>(/)
                </div></v-btn
              >
            </div>
            <div class="d-flex justify-space-around">
              <v-btn
                class="horizontal clickchange large mr-1"
                x-large
                @click="triger('4 Runs')"
                ><div class="d-flex flex-column">
                  <span>4 Runs</span><v-divider></v-divider>(4)
                </div></v-btn
              >
              <v-btn
                class="horizontal clickchange large"
                x-large
                @click="triger('6 Runs')"
                ><div class="d-flex flex-column">
                  <span>6 Runs</span><v-divider></v-divider>(6)
                </div></v-btn
              >
            </div>
          </div>
          <v-btn class="vertical clickchange" @click="triger('0 Runs')"
            ><div class="d-flex flex-column">
              <span>0</span><v-divider></v-divider>(0)
            </div></v-btn
          >
        </div>
        <div class="d-flex justify-space-between mb-3">
          <v-btn class="vertical clickchange" @click="triger('1 Run')"
            ><div class="d-flex flex-column">
              <span>1</span><v-divider></v-divider>(1)
            </div></v-btn
          >
          <div class="d-flex flex-column justify-space-around">
            <div class="d-flex justify-space-around">
              <v-btn
                class="horizontal clickchange large mr-1"
                x-large
                @click="triger('Wide')"
                ><div class="d-flex flex-column">
                  <span>Wide</span><v-divider></v-divider>(7)
                </div></v-btn
              >
              <v-btn
                class="horizontal clickchange large"
                x-large
                @click="triger('No Ball')"
                ><div class="d-flex flex-column">
                  <span>No Ball</span><v-divider></v-divider>(8)
                </div></v-btn
              >
            </div>
            <div class="d-flex justify-space-around">
              <v-btn
                class="horizontal clickchange large mr-1"
                x-large
                @click="triger('Free Hit')"
                ><div class="d-flex flex-column">
                  <span>Free Hit</span><v-divider></v-divider>(9)
                </div></v-btn
              >
              <v-btn
                class="horizontal clickchange large"
                x-large
                @click="triger('Bowler Stop')"
                ><div class="d-flex flex-column">
                  <span>Ball Stop</span><v-divider></v-divider>(.)
                </div></v-btn
              >
            </div>
          </div>
          <v-btn class="vertical clickchange" @click="triger('2 Runs')"
            ><div class="d-flex flex-column">
              <span>2</span><v-divider></v-divider>(2)
            </div></v-btn
          >
        </div>
        <v-row>
          <v-col sm="4" md="2">
            <v-btn
              class="buttonsize clickchange"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('Review')"
              ><div class="d-flex flex-column">
                <span>Review</span><v-divider></v-divider>(v)
              </div></v-btn
            >
          </v-col>
          <v-col sm="4" md="2">
            <v-btn
              class="buttonsize clickchange"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('3 Runs')"
              ><div class="d-flex flex-column">
                <span>3 Runs</span><v-divider></v-divider>(3)
              </div></v-btn
            >
          </v-col>
          <v-col sm="4" md="2">
            <v-btn
              class="buttonsize clickchange"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('Sorry')"
              ><div class="d-flex flex-column">
                <span>Sorry</span><v-divider></v-divider>(-)
              </div></v-btn
            >
          </v-col>
          <v-col sm="4" md="2">
            <v-btn
              class="buttonsize clickchange"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('Fast Bowler')"
              ><div class="d-flex flex-column">
                <span>Fast Bowler</span><v-divider></v-divider>(f)
              </div></v-btn
            >
          </v-col>
          <v-col sm="4" md="2">
            <v-btn
              class="buttonsize clickchange"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('Spin Bowler')"
              ><div class="d-flex flex-column">
                <span>Spin Bowler</span><v-divider></v-divider>(s)
              </div></v-btn
            >
          </v-col>
          <v-col sm="4" md="2">
            <v-btn
              class="buttonsize clickchange"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('Break')"
              ><div class="d-flex flex-column">
                <span>Break</span><v-divider></v-divider>(k)
              </div></v-btn
            >
          </v-col>
          <v-col sm="4" md="2">
            <v-btn
              class="buttonsize clickchange"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('Clear')"
              ><div class="d-flex flex-column">
                <span>Clear</span><v-divider></v-divider>(l)
              </div></v-btn
            >
          </v-col>
          <v-col sm="4" md="2">
            <v-btn
              class="buttonsize clickchange"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('Good Night')"
              ><div class="d-flex flex-column">
                <span>Good Night</span><v-divider></v-divider>(g)
              </div></v-btn
            >
          </v-col>
          <v-col sm="4" md="2">
            <v-btn
              class="buttonsize clickchange"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('Batsman Injured')"
              ><div class="d-flex flex-column">
                <span>Batsman Injured</span><v-divider></v-divider>(b)
              </div></v-btn
            >
          </v-col>
          <v-col sm="4" md="2">
            <v-btn
              class="buttonsize clickchange"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('Bowler Injured')"
              ><div class="d-flex flex-column">
                <span>Bowler injured</span><v-divider></v-divider>(o)
              </div></v-btn
            >
          </v-col>
          <v-col sm="4" md="2">
            <v-btn
              class="buttonsize clickchange"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('Rain')"
              ><div class="d-flex flex-column">
                <span>Rain</span><v-divider></v-divider>(r)
              </div></v-btn
            >
          </v-col>
          <v-col sm="4" md="2">
            <v-btn
              class="buttonsize clickchange"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('Heavy Rain')"
              ><div class="d-flex flex-column">
                <span>Heavy Rain</span><v-divider></v-divider>(h)
              </div></v-btn
            >
          </v-col>
          <v-col sm="4" md="2">
            <v-btn
              class="buttonsize clickchange"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('Match Delayed')"
              ><div class="d-flex flex-column">
                <span>Match Delayed</span><v-divider></v-divider>(d)
              </div></v-btn
            >
          </v-col>
          <v-col sm="4" md="2">
            <v-btn
              class="buttonsize clickchange"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('Wet Outfield')"
              ><div class="d-flex flex-column">
                <span>Wet Outfield</span><v-divider></v-divider>(w)
              </div></v-btn
            >
          </v-col>
          <v-col sm="4" md="2">
            <v-btn
              class="buttonsize clickchange"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('Covers Are Coming')"
              ><div class="d-flex flex-column">
                <span>Covers</span><v-divider></v-divider>(c)
              </div></v-btn
            >
          </v-col>
          <v-col sm="4" md="2">
            <v-btn
              class="buttonsize clickchange"
              :large="$vuetify.breakpoint.mobile"
              :x-large="!$vuetify.breakpoint.mobile"
              @click="triger('Players Are Coming')"
              ><div class="d-flex flex-column">
                <span>Players Are Coming</span><v-divider></v-divider>(p)
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
  middleware: 'authenticated',
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
        if (e.key === 'Enter') {
          this.triger('Ball Start')
        }
        if (e.key === '.') {
          this.triger('Bowler Stop')
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
        if (e.key === '7') {
          this.triger('Wide')
        }
        if (e.key === '8') {
          this.triger('No Ball')
        }
        if (e.key === '9') {
          this.triger('Free Hit')
        }
        if (e.key === '/') {
          this.triger('Appeal')
        }
        if (e.key === '-') {
          this.triger('Sorry')
        }
        if (e.key === 'T' || e.key === 't') {
          this.triger('Third Umpire')
        }
        if (e.key === '*') {
          this.triger('Not Out')
        }
        if (e.key === 'I' || e.key === 'i') {
          this.triger('In The Air')
        }
        if (e.key === 'L' || e.key === 'l') {
          this.triger('Clear')
        }
        if (e.key === 'F' || e.key === 'f') {
          this.triger('Fast Bowler')
        }
        if (e.key === 'S' || e.key === 's') {
          this.triger('Spin Bowler')
        }
        if (e.key === 'B' || e.key === 'b') {
          this.triger('Batsman Injured')
        }
        if (e.key === 'O' || e.key === 'o') {
          this.triger('Bowler Injured')
        }
        if (e.key === 'R' || e.key === 'r') {
          this.triger('Rain')
        }
        if (e.key === 'H' || e.key === 'h') {
          this.triger('Heavy Rain')
        }
        if (e.key === 'C' || e.key === 'c') {
          this.triger('Covers Are Coming')
        }
        if (e.key === 'P' || e.key === 'p') {
          this.triger('Players Are Coming')
        }
        if (e.key === 'E' || e.key === 'e') {
          this.triger('Checking')
        }
        if (e.key === 'K' || e.key === 'k') {
          this.triger('Break')
        }
        if (e.key === 'G' || e.key === 'g') {
          this.triger('Good Night')
        }
        if (e.key === 'W' || e.key === 'w') {
          this.triger('Wet Outfield')
        }
        if (e.key === 'D' || e.key === 'd') {
          this.triger('Match Delayed')
        }
        if (e.key === 'V' || e.key === 'v') {
          this.triger('Review')
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
          id: this.$route.params.id,
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
  width: 100%;
}
.large {
  height: 60px !important;
}
.vertical {
  width: 10vw;
}
.vertical {
  height: 200px !important;
  font-weight: 800;
}
.horizontal {
  width: 30vw;
  height: 95px !important;
}
</style>
