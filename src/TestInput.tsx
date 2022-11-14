import { useFormStore } from './data/store';

export const TestInput = ({
  valuekey,
}: {
  valuekey: 'firstValue' | 'secondValue';
}): JSX.Element => {
  const value = useFormStore((state) => state[valuekey]);
  const updateInput = useFormStore((state) => state.updateInput);
  console.log(valuekey);
  return (
    <>
      <p>{value}</p>
      <input
        value={value}
        onChange={(e) => updateInput(valuekey, e.target.value)}
      ></input>
    </>
  );
};
