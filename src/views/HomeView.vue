<script setup>
import { h, ref, reactive } from "vue";
import { PlusCircleOutlined } from "@ant-design/icons-vue";

import { fileObserveCreate } from "@/api/file-observe";
import ModalForm from "../components/ModalForm.vue";

const open = ref(false);
const create = () => {
  open.value = true;
};

const handleOk = () => {
  console.log("ok1");
  open.value = false;
};
const handleCancel = () => {
  console.log("cancel1");
  open.value = false;
};
</script>

<template>
  <a-button type="primary" :icon="h(PlusCircleOutlined)" @click="create">
    Create
  </a-button>

  <ModalForm
    v-if="open"
    title="Basic Modal"
    :deal-func="fileObserveCreate"
    @ok="handleOk"
    @cancel="handleCancel"
  ></ModalForm>
</template>
