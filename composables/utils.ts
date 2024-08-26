export const useUtils = () => {
  const toast = useToast();

  const notify = (type: string, text: string) => {
    let icon: string = type == 'success' ? 'check-circle' : 'x-circle';
    let myColor: String = type == 'success' ? 'primary' : 'red';
    toast.add({
      title: text,
      color: myColor,
      icon: 'i-heroicons-' + icon,
      timeout: 1800,
    });
  };
  return { notify };
};
