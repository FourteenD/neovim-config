import { App } from "vue";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";

VXETable.setup({
  size: "mini", // 全局尺寸
  zIndex: 999, // 全局 zIndex 起始值，如果项目的的 z-index 样式值过大时就需要跟随设置更大，避免被遮挡
  version: 0, // 版本号，对于某些带数据缓存的功能有用到，上升版本号可以用于重置数据
  loadingText: "加载中...", // 全局loading提示内容，如果为null则不显示文本
  table: {
    showHeader: true,
    keepSource: false,
    showOverflow: null,
    showHeaderOverflow: null,
    showFooterOverflow: null,
    size: null,
    autoResize: false,
    stripe: false,
    border: false,
    round: false,
    emptyText: "暂无数据",
    rowConfig: {
      keyField: "_X_ROW_KEY", // 行数据的唯一主键字段名
    },
    radioConfig: {
      trigger: "default",
    },
    checkboxConfig: {
      strict: false,
      highlight: false,
      range: false,
      trigger: "default",
    },
    sortConfig: {
      remote: false,
      trigger: "default",
      orders: ["asc", "desc", null],
      sortMethod: undefined,
    },
    filterConfig: {
      remote: false,
      filterMethod: undefined,
    },
    expandConfig: {
      trigger: "default",
      showIcon: true,
    },
    treeConfig: {
      rowField: "id",
      parentField: "parentId",
      children: "children",
      hasChild: "hasChild",
      mapChildren: "_X_ROW_CHILD",
      indent: 20,
      showIcon: true,
    },
    tooltipConfig: {
      enterable: true,
    },
    menuConfig: {
      visibleMethod: undefined,
    },
    editConfig: {
      mode: "cell",
      showAsterisk: true,
    },
    importConfig: {
      modes: ["insert", "covering"],
    },
    exportConfig: {
      modes: ["current", "selected"],
    },
    customConfig: {
      storage: false,
    },
    scrollX: {
      gt: 60,
    },
    scrollY: {
      gt: 100,
    },
    loading: true,
  },
  grid: {
    size: null,
    zoomConfig: {
      escRestore: true,
    },
    pagerConfig: {
      perfect: false,
    },
    toolbarConfig: {
      perfect: false,
    },
    proxyConfig: {
      autoLoad: true,
      message: true,
      props: {
        list: null, // 用于列表，读取响应数据
        result: "result", // 用于分页，读取响应数据
        total: "page.total", // 用于分页，读取总条数
      },
      beforeItem: null,
      beforeColumn: null,
      beforeQuery: null,
      afterQuery: null,
      beforeDelete: null,
      afterDelete: null,
      beforeSave: null,
      afterSave: null,
    },
  },
  pager: {
    size: null,
    autoHidden: false,
    perfect: true,
    pageSize: 10,
    pagerCount: 7,
    pageSizes: [10, 15, 20, 50, 100],
    layouts: [
      "PrevJump",
      "PrevPage",
      "Jump",
      "PageCount",
      "NextPage",
      "NextJump",
      "Sizes",
      "Total",
    ],
  },
  form: {
    preventSubmit: false,
    size: null,
    validConfig: {
      autoPos: true,
    },
    tooltipConfig: {
      enterable: true,
    },
    titleAsterisk: true,
  },
  input: {
    size: null,
    transfer: false,
    labelFormat: "",
    valueFormat: "",
    startDay: 1,
    digits: 2,
    controls: true,
  },
  textarea: {
    size: null,
    autosize: {
      minRows: 1,
      maxRows: 10,
    },
  },
  select: {
    size: null,
    transfer: false,
    optionConfig: {
      keyField: "_X_OPTION_KEY", // 选项数据的唯一主键字段名
    },
    multiCharOverflow: 8,
  },
  toolbar: {
    size: null,
    import: true,
    export: true,
    custom: {
      isFooter: true,
    },
    buttons: [],
    tools: [],
  },
  button: {
    size: null,
    transfer: false,
  },
  radio: {
    size: null,
  },
  checkbox: {
    size: null,
  },
  switch: {
    size: null,
  },
  modal: {
    size: null,
    minWidth: 340,
    minHeight: 200,
    lockView: true,
    mask: true,
    duration: 3000,
    marginSize: 0,
    dblclickZoom: true,
    showTitleOverflow: true,
    storage: false,
  },
  list: {
    scrollY: {
      gt: 100,
    },
  },
});

export default (app: App) => {
  app.use(VXETable);

  // 给 vue 实例挂载内部对象，例如：
  app.config.globalProperties.$XModal = VXETable.modal;
  app.config.globalProperties.$XPrint = VXETable.print;
  app.config.globalProperties.$XSaveFile = VXETable.saveFile;
  app.config.globalProperties.$XReadFile = VXETable.readFile;
};
