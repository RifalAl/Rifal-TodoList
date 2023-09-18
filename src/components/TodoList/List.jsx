import Card from "../UI/Card";

const List = ({ dataList, onRemove }) => {
  return (
    <>
      {dataList.length === 0 && <p className="text-center">No Data</p>}
      {dataList.map((item,index) => (
        <Card key={index} classname="mt-4" onRemove={onRemove} id={item.id}>
          <p>{item.judul}</p>
        </Card>
      ))}
    </>
  );
};

export default List;
