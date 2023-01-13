import { useState } from 'react';
import { ComHookCustomizado } from './components/ComHookCustomizado';
import { ComTanStackQuery } from './components/ComTanStackQuery';
import { ComTanStackQueryESuspense } from './components/ComTanStackQueryESuspense';
import { ComUseEffectEAwait } from './components/ComUseEffectEAwait';
import { ComUseEffectEThen } from './components/ComUseEffectEThen';
import { ComUseSWR } from './components/ComUseSWR';
import { ComUseSWRESuspense } from './components/ComUseSWRESuspense';
import { ComLazyStateInitialization } from './components/ComLazyStateInitilization';

export default function App() {
  const [variant, setVariant] = useState(0);

  const selectVariant = (num: number) => () => setVariant(num);

  return (
    <div>
      <button onClick={selectVariant(1)}>Com useEffect e then</button>
      <button onClick={selectVariant(2)}>Com useEffect e await</button>
      <button onClick={selectVariant(3)}>Com useSWR</button>
      <button onClick={selectVariant(4)}>Com useSWR e Suspense</button>
      <button onClick={selectVariant(5)}>Com TanStack Query</button>
      <button onClick={selectVariant(6)}>Com TanStack Query e Suspense</button>
      <button onClick={selectVariant(7)}>Com useFetch</button>
      <button onClick={selectVariant(8)}>Com lazy state initialization</button>
      <hr />

      {variant === 1 && <ComUseEffectEThen />}
      {variant === 2 && <ComUseEffectEAwait />}
      {variant === 3 && <ComUseSWR />}
      {variant === 4 && <ComUseSWRESuspense />}
      {variant === 5 && <ComTanStackQuery />}
      {variant === 6 && <ComTanStackQueryESuspense />}
      {variant === 7 && <ComHookCustomizado />}
      {variant === 8 && <ComLazyStateInitialization />}
    </div>
  );
}
