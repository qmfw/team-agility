<template>
  <main>
    <article id="login_area" class="main_article">
      <div class="row-wrapper">
        <draggable
          class="row"
          :list="board"
          group="a"
          :scroll-sensitivity="200"
          :force-fallback="true"
        >
          <template #item="{ element: parent }">
            <div class="col-3">
              <h3>{{ parent.category }}</h3>
              <draggable
                class="list-group"
                :list="parent.list"
                group="people"
                :scroll-sensitivity="200"
                :force-fallback="true"
              >
                <template #item="{ element: child }">
                  <div class="list-group-item" :key="child.name">
                    {{ child.name }}
                  </div>
                </template>
              </draggable>
            </div>
          </template>
        </draggable>
      </div>
    </article>
  </main>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "DashBoard",
  components: { draggable },
  order: 1,
  emits: ["show-now-loading"],

  data: () => {
    return {
      board: [
        {
          category: "Draggable 1",
          list: [
            { name: "John", id: 1 },
            { name: "Joao", id: 2 },
            { name: "Jean", id: 3 },
            { name: "Gerard", id: 4 },
          ],
        },
        {
          category: "Draggable 2",
          list: [
            { name: "Juan", id: 5 },
            { name: "Edgard", id: 6 },
            { name: "Johnson", id: 7 },
          ],
        },
        {
          category: "Draggable 3",
          list: [
            { name: "Vinicius Jr.", id: 9 },
            { name: "Kylian Mbappe", id: 10 },
            { name: "Jude Bellingham", id: 11 },
            { name: "Toni Kroos", id: 12 },
            { name: "Eduardo Camavinga", id: 13 },
          ],
        },
        {
          category: "Draggable 4",
          list: [
            { name: "Erling Haaland", id: 14 },
            { name: "Kevin De Bryune", id: 15 },
            { name: "Phil Foden", id: 16 },
            { name: "Jack Grealish", id: 17 },
          ],
        },
        {
          category: "Draggable 5",
          list: [
            { name: "Bukayo Saka", id: 18 },
            { name: "Kai Havertz", id: 19 },
            { name: "William Saliba", id: 20 },
          ],
        },
        {
          category: "Draggable 6",
          list: [
            { name: "Virgil Van Djik", id: 21 },
            { name: "Mohammed Salah", id: 22 },
            { name: "Alisson", id: 23 },
          ],
        },
        {
          category: "Draggable 7",
          list: [
            { name: "###", id: 24 },
            { name: "%%%", id: 25 },
            { name: "$$$", id: 26 },
          ],
        },
        {
          category: "Draggable 8",
          list: [
            { name: "@@@", id: 27 },
            { name: "¥¥¥", id: 28 },
            { name: "___", id: 29 },
          ],
        },
      ],
    };
  },
  mounted() {},
  methods: {
    add: function () {
      this.list.push({ name: "Juan" });
    },
    replace: function () {
      this.list = [{ name: "Edgard" }];
    },
  },
};
</script>
<style scoped>
.row-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-x: auto;
  padding: 20px;
}

.row {
  width: fit-content;
  max-width: 100%;
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
}

/* Column styling */
.col-3 {
  flex: 0 0 auto;
  /* Prevent columns from shrinking or growing */
  width: 250px;
  /* Fixed width for each column */
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: black;
  cursor: grab;
}

/* Heading styling */
.col-3 h3 {
  margin-bottom: 15px;
  font-size: 1.25rem;
  text-align: center;
  color: black;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

/* Draggable list styling */
.list-group {
  list-style-type: none;
  padding: 0;
  margin: 0;
  color: black;
}

/* Draggable list item styling */
.list-group-item {
  background-color: #ffffff;
  border: 1px solid #ddd;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  cursor: grab;
  color: black;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

/* Hover effect for list items */
.list-group-item:hover {
  background-color: #e9ecef;
}

/* Mobile responsive adjustments */
@media (max-width: 767px) {
  .row-wrapper {
    overflow-x: hidden;
  }

  .row {
    flex-direction: column;
  }
}
</style>
