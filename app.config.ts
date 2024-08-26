export default defineAppConfig({
  ui: {
    notification: {
      transition: {
        enterActiveClass: 'transform ease-out duration-300 transition',
        enterFromClass:
          'translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2',
        enterToClass: 'translate-y-0 opacity-100 sm:translate-x-0',
        leaveActiveClass: 'transition ease-in duration-100',
        leaveFromClass: 'opacity-100',
        leaveToClass: 'opacity-0',
      },
    },
  },
});
