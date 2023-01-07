// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    subtitle: {
      type: "string",
      description: "The subtitle of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    keywords: {
      type: "string",
      description: "Meta Etiketleri",
      required: true
    },
    description: {
      type: "string",
      description: "Meta Etiketleri",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `Blog/Yazilar/${post._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post]
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-PLYKP5UV.mjs.map
