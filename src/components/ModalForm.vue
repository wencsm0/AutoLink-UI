<template>
  <a-modal :open="true" :title="title" @ok="handleOk" @cancel="handleCancel">
    <a-alert v-if="error" message="Error" type="error" show-icon />

    <a-spin :spinning="spinning">
      <a-form
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 16 }"
        style="margin-top: 5%"
      >
        <a-form-item
          label="文件路径"
          v-bind="validateInfos.filePath"
          style="margin-top: 40px; margin-bottom: 30px"
        >
          <a-input v-model:value="modelRef.filePath" />
        </a-form-item>

        <a-form-item
          label="链接路径"
          v-bind="validateInfos.linkPath"
          style="margin-top: 30px; margin-bottom: 40px"
        >
          <a-input v-model:value="modelRef.linkPath" />
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script setup>
import { h, ref, reactive } from "vue";
import { Form } from "ant-design-vue";
import Debounce from "@/utils/debounce";

const props = defineProps(["title", "dealFunc"]);
const title = ref(props.title);
const dealFunc = ref(props.dealFunc).value;

const emits = defineEmits(["ok", "cancel"]);
const handleOk = () => {
  validate()
    .then(() => {
      spinning.value = true;

      dealFunc(modelRef).then(() => console.log("success"));

      emits("ok");
    })
    .catch((err) => {
      error.value = true;
      console.log(12312312312);
    });
};
const handleCancel = () => {
  emits("cancel");
};

const spinning = ref(false);
const modelRef = reactive({
  filePath: "",
  linkPath: "",
});
const rulesRef = reactive({
  filePath: [
    {
      required: true,
      message: "请输入文件路径",
    },
  ],
  linkPath: [
    {
      required: true,
      message: "请输入链接路径",
    },
  ],
});
const useForm = Form.useForm;
const { validate, validateInfos } = useForm(modelRef, rulesRef, {
  onValidate: (...args) => spinning.value,
});

const error = ref(false);
</script>
