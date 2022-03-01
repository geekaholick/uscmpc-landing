<template>
  <section
    class="screenshot-style-2 section-padding bg-cover section"
    id="screenshot"
    :style="bgImg"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title title-style-2">
            <h2 class="title">CONSUMER STORE / COOPERATIVE MART</h2>
            <p class="paragraph">
              Claritas est etiam processus dynamicus, qui sequitur mutationem
              <br />consuetudium lectorum.
            </p>
          </div>
        </div>
      </div>
      <div class="text-center title">
        <h2>COOP MART GROCERIES</h2>
      </div>
      <div>
        <b-overlay :show="show" rounded="sm">
          <div v-if="itemsList.length === 0 && !show" class="empty-state">
            <div class="card">
              <img
                class="card-img-top empty-img w-25 d-block mx-auto mt-5"
                src="@/assets/img/empty-state/empty-state.svg"
                alt="empty-state-image"
              />
              <p class="card-text text-muted text-center mt-2 mb-2">
                There is no Items added yet.
              </p>
            </div>
          </div>

          <b-row v-if="itemsList.length > 0">
            <b-col md="2" sm="4" class="my-1">
              <b-form-group
                label="Page"
                label-align-sm="left"
                label-size="md"
                label-for="perPageSelect"
                class="mb-0"
              >
                <b-input-group size="md">
                  <b-form-select
                    id="perPageSelect"
                    v-model="perPage"
                    :options="pageOptions"
                    class="w-25"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col md="10" class="my-1">
              <b-form-group
                label="Filter"
                label-align-sm="left"
                label-size="md"
                label-for="filterInput"
                class="mb-0 float-right w-75"
              >
                <b-input-group size="md">
                  <b-form-input
                    id="filterInput"
                    v-model="filter"
                    type="search"
                    placeholder="Search Item"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col class="text-center font-weight-bold mt-3 mb-3">
              <h5 class="text-danger">
                <!-- Is this date a static or dynamic? -->
                AVAILABLE ITEMS as of 10-04-2021
              </h5>
            </b-col>
            <b-col cols="12">
              <b-table
                :sort-by.sync="sortBy"
                striped
                hover
                responsive="sm"
                show-empty
                :bordered="bordered"
                :outlined="outlined"
                :fixed="fixed"
                :per-page="perPage"
                :current-page="currentPage"
                :items="items"
                :fields="fields"
                :filter="filter"
                :filter-included-fields="filterOn"
                class="table"
                sort-icon-right
                @filtered="onFiltered"
              >
                <template #thead-top="">
                  <b-tr>
                    <b-th class="text-center font-weight-bold">ITEMS </b-th>
                    <b-th colspan="2" class="text-center"
                      >PRICES IN Phil. PESO</b-th
                    >
                  </b-tr>
                </template>
                <template #cell(price_item)="data">
                  <p class="text-center">{{ data.item.price_item }}</p>
                </template>
                <template #cell(description)="data">
                  <p class="text-center">{{ data.item.description }}</p>
                </template>
                <template #cell(price_unit)="data">
                  <p class="text-center">
                    {{ data.item.price_batch }}{{ data.item.item_unit }}
                  </p>
                </template>
              </b-table>
            </b-col>
            <b-col cols="12">
              <b-pagination
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="perPage"
                align="end"
                size="md"
                class="my-0"
              />
            </b-col>
          </b-row>
        </b-overlay>
      </div>
    </div>
  </section>
</template>

<script>
import {
  BCol,
  BOverlay,
  BInputGroup,
  BFormInput,
  BTable,
  BRow,
  BFormGroup,
  BFormSelect,
  BPagination
} from "bootstrap-vue";
import * as coopMartTypes from "@/store/types/coopMart";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    BCol,
    BOverlay,
    BInputGroup,
    BFormInput,
    BTable,
    BRow,
    BFormGroup,
    BFormSelect,
    BPagination
  },
  data() {
    return {
      bgImg: {
        backgroundImage: `url(${require("../assets/img/bg/screenshot-bg.jpg")})`
      },
      show: true,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      totalRows: 1,
      currentPage: 1,
      fields: [
        {
          key: "item_name",
          label: "NAME / BRAND / FLAVOR/NEW-ARRIVAL",
          sortable: true
        },
        { key: "price_item", label: "PER PIECE", sortable: true },
        { key: "description", label: "PACK/BANDLE/BOX/CAN", sortable: true },
        { key: "price_unit", label: "KG/G /ML/LT" }
      ],
      bordered: true,
      outlined: true,
      fixed: true,
      items: [],
      sortBy: "",
      filterOn: [],
      filter: null
    };
  },
  computed: {
    ...mapGetters({
      itemsList: coopMartTypes.GETTER_COOPMART_ITEMS
    })
  },
  created() {
    this.fetchItems().then(() => {
      this.getItemsAvailable();
      this.show = false;
      this.totalRows = this.items.length;
      this.currentPage = 1;
    });
  },
  methods: {
    ...mapActions({
      fetchItems: coopMartTypes.ACTION_GET_COOPMART_ITEMS
    }),

    getItemsAvailable() {
      const itemsAvailableStatus = this.itemsList.filter(
        val => val.status === "available"
      );
      this.items = itemsAvailableStatus;
      return itemsAvailableStatus;
    },

    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>
<style scoped></style>
