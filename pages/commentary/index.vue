<template>
  <div>
    <div class="index">
      <div class="text1">Cricket Commentary</div>
      <div class="text1 mt-3">Other Games</div>
      <v-data-table
        :headers="nanoHeaders"
        :items="nanoGames"
        :footer-props="{
          itemsPerPageOptions: [5, 10, 15, 20, 50],
          showCurrentPage: true,
          showFirstLastPage: true,
        }"
        class="elevation-1 mt-3 text"
      >
        <template v-slot:[`item.Commentary`]="row">
          <button
            type="button"
            class="button"
            @click="
              $router.push({
                path: `/commentary/${row.item._id}?name=${row.item.name}`,
              })
            "
          >
            <span class="btntext">Commentary</span>
          </button>
        </template>
      </v-data-table>
      <div class="text1">Media Games</div>
      <v-data-table
        :headers="mediaHeaders"
        :items="mediaGames"
        :footer-props="{
          itemsPerPageOptions: [5, 10, 15, 20, 50],
          showCurrentPage: true,
          showFirstLastPage: true,
        }"
        class="elevation-1 mt-3 text"
      >
        <template v-slot:[`item.Commentary`]="row">
          <button
            type="button"
            class="button"
            @click="
              $router.push(`/commentary/${row.item._id}?name=${row.item.name}`)
            "
          >
            <span class="btntext">Commentary</span>
          </button>
        </template>
      </v-data-table>
      <div class="text1">Zoom Games</div>
      <v-data-table
        :headers="zoomHeaders"
        :items="zoomGames"
        :footer-props="{
          itemsPerPageOptions: [5, 10, 15, 20, 50],
          showCurrentPage: true,
          showFirstLastPage: true,
        }"
        class="elevation-1 mt-3 text"
      >
        <template v-slot:[`item.Commentary`]="row">
          <button
            type="button"
            class="button"
            @click="
              $router.push(`/commentary/${row.item._id}?name=${row.item.name}`)
            "
          >
            <span class="btntext">Commentary</span>
          </button>
        </template>
      </v-data-table>
    </div>
    <div class="d-flex justify-center">
      <v-btn outlined @click="$router.push({ path: '/' })">Logout</v-btn>
    </div>
  </div>
</template>

<script>
import gameService from '@/service/gameService'
export default {
  middleware: 'authenticated',
  data() {
    return {
      nanoGames: [],
      mediaGames: [],
      zoomGames: [],
      nanoHeaders: [
        {
          text: 'Name',
          align: 'start',
          value: 'name',
        },
        { text: 'Stream Names', value: 'streamId', sortable: false },
        { text: 'Handled By', value: 'handledBy', sortable: false },
        { text: '', value: 'Commentary', sortable: false },
      ],
      mediaHeaders: [
        {
          text: 'Name',
          align: 'start',
          value: 'name',
        },
        { text: 'Stream Names', value: 'streamId', sortable: false },
        { text: 'Handled By', value: 'handledBy', sortable: false },
        { text: '', value: 'Commentary', sortable: false },
      ],
      zoomHeaders: [
        {
          text: 'Name',
          align: 'start',
          value: 'name',
        },
        { text: 'Meeting Number', value: 'meetings[0]', sortable: false },
        { text: 'Handled By', value: 'handledBy', sortable: false },
        { text: '', value: 'Commentary', sortable: false },
      ],
    }
  },
  created() {
    this.getActiveNanoGamesForCommentary()
    this.getActiveMediaGamesForCommentary()
    this.getActiveZoomGamesForCommentary()
  },
  methods: {
    async getActiveNanoGamesForCommentary() {
      try {
        const result = await gameService.getActiveNanoGamesForCommentary()
        if (result.status == 200) {
          this.nanoGames = result.data
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getActiveMediaGamesForCommentary() {
      try {
        const result = await gameService.getActiveMediaGamesForCommentary()
        if (result.status == 200) {
          this.mediaGames = result.data
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getActiveZoomGamesForCommentary() {
      try {
        const result = await gameService.getActiveZoomGamesForCommentary()
        if (result.status == 200) {
          this.zoomGames = result.data
        }
      } catch (error) {
        console.log(error)
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
.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 101px;
  height: 30px;
  background: #000000;
  border-radius: 20px;
}
.btntext {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
}
</style>
