export const useSettings = () => {
  const user = useState('user', () => {});
  const circuits = useState('circuits', () => {});
  return {
    user,
    circuits,
  };
};
