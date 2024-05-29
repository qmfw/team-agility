<template>
  <main>
    <article id="login_area" class="main_article">
      <div class="row-wrapper">
        <div class="row">
          <div class="col-3">
            <h3>Draggable 1</h3>
            <draggable class="list-group" :list="list1" group="people">
              <template #item="{ element }">
                <div class="list-group-item" :key="element.name">
                  {{ element.name }}
                </div>
              </template>
            </draggable>
          </div>

          <div class="col-3">
            <h3>Draggable 2</h3>
            <draggable class="list-group" :list="list2" group="people"
              ><template #item="{ element }">
                <div class="list-group-item">
                  {{ element.name }}
                </div></template
              >
            </draggable>
          </div>
        </div>
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
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 },
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 },
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
  display: flex;
  justify-content: center; /* Center content */
  overflow-x: auto;
  padding: 20px;
}

.row {
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
}

/* Column styling */
.col-3 {
  flex: 0 0 auto; /* Prevent columns from shrinking or growing */
  width: 250px; /* Fixed width for each column */
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Heading styling */
.col-3 h3 {
  margin-bottom: 15px;
  font-size: 1.25rem;
  text-align: center;
}

/* Draggable list styling */
.list-group {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

/* Draggable list item styling */
.list-group-item {
  background-color: #ffffff;
  border: 1px solid #ddd;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  cursor: grab;
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
