<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
import { fileObserveCreate } from "@/api/file-observe";
import { h, ref, reactive, toRaw } from "vue";
import { PlusCircleOutlined } from "@ant-design/icons-vue";
import { Form } from "ant-design-vue";
import Debounce from "@/utils/debounce";
const open = ref(false);

const create = () => {
  open.value = true;
};

const fileObserveError = ref(false);

const fileObserveSpinning = ref(false);

const useForm = Form.useForm;

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

const { validate, validateInfos } = useForm(modelRef, rulesRef, {
  onValidate: (...args) => spinning.value,
});

const fileObserveCreateDe = new Debounce();
async function fileObserveCreateSend(param) {
  await fileObserveCreateDe.debounceEnd();
  fileObserveCreate(param)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      error.value = true;
      console.log("error", err);
    });
}

const handleOk = () => {
  validate()
    .then(() => {
      spinning.value = true;
      fileObserveCreateSend(modelRef).then(() => {
        spinning.value = false;
      });
    })
    .catch((err) => {});
};
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Create AutoLink</template>
    <div>
      <a-button type="primary" :icon="h(PlusCircleOutlined)" @click="create">
        Create
      </a-button>

      <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
        <a-alert
          v-if:error="error"
          message="Error"
          type="error"
          show-icon
        />

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
    </div>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
      rel="noopener"
      >Vite</a
    >. The recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener"
      >VSCode</a
    >
    +
    <a
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
      rel="noopener"
      >Volar</a
    >. If you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a>
    and
    <a href="https://on.cypress.io/component" target="_blank" rel="noopener"
      >Cypress Component Testing</a
    >.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener"
      >Vue Router</a
    >,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener"
      >Vue Test Utils</a
    >, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener"
      >Vue Dev Tools</a
    >. If you need more resources, we suggest paying
    <a
      href="https://github.com/vuejs/awesome-vue"
      target="_blank"
      rel="noopener"
      >Awesome Vue</a
    >
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a
    >, our official Discord server, or
    <a
      href="https://stackoverflow.com/questions/tagged/vue.js"
      target="_blank"
      rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener"
      >our mailing list</a
    >
    and follow the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
      >@vuejs</a
    >
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its
    sustainability. You can help us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener"
      >becoming a sponsor</a
    >.
  </WelcomeItem>
</template>
