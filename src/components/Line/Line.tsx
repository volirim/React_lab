interface LineInterface {
  styleList: string;
}

const Line = function ({ styleList }: LineInterface) {
  return <div className={styleList} />;
};

export default Line;
