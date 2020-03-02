import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import {Table} from 'antd';


class App extends React.Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <TableData />
      </header>
    </div>
  )
  }
}
class TableData extends React.Component{
  constructor(props)
  {
    super(props)
    this.state ={
      data: [], // массив для хранения данных полученных с сервера (массив строк)
      columns: [ // массив столбцов
        {
          title:"Id",
          dataIndex:"id",
          key:"id"
        },
        {
          title:"Name",
          dataIndex:"name",
          key:"name"
        },
        {
          title:"Username",
          dataIndex:"username",
          key:"username"
        },
        {
          title:"Email",
          dataIndex:"email",
          key:"email"
        },
        {
          title:"Phone",
          dataIndex:"phone",
          key:"phone"
        },
        {
          title:"Website",
          dataIndex:"website",
          key:"website"
        }
      ]
    };
  }
  
  componentDidMount(){
    async function fetchRespondData(){ //Ассинхронная функция запроса на сервер
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users"); // промис ответа сервера
        const users = await response.json(); // промис приведения ответа в формат json
        return users; // возврат ответа
      } catch(err){
        alert(err);
      }
    }

    fetchRespondData().then(res => { //вызов ассинхронной функции
      this.setState({data: res}); // изменение состояния
    })
  }
  render(){ // рендеринг table antd
    return <Table dataSource={this.state.data} columns={this.state.columns}/>
  }
}

export default App;
