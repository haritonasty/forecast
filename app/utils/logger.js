export function logger(store) {
  return next => action => {
    console.log('Action - ', action);

    // Пропускаем это действие дальше по цепочке
    const nextAction = next(action);

    console.log('State after apply Action', store.getState());

    return nextAction;
  };
}
