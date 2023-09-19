import React,{ Component } from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
  'id':1,
  'image':'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA3MThfNTAg%2FMDAxNjg5NjI2NDA2MTc0.yuXzbpfMgt2w2bLgGHAvuu-EivmgWX6lEPMUUdgvVngg.Pyrp9GMBaMby8jmIHKY5fpu_xVtfKpSEYfjsxYhkUhog.JPEG.2cat1dog%2FKakaoTalk_Photo_2023-07-18-05-39-49_001.jpeg&type=sc960_832',
  'name':'신동헌',
  'birthday':'961215',
  'gender':'남자',
  'job':'대학생'
},
{
  'id':2,
  'image':'https://source.unsplash.com/random',
  'name':'홍길동',
  'birthday':'911215',
  'gender':'여자',
  'job':'대학생'
},
{
  'id':3,
  'image':'https://source.unsplash.com/random',
  'name':'고양이',
  'birthday':'152926',
  'gender':'남자',
  'job':'대학생'
}
]
class App extends Component {
  render(){
    return(
      <div>
        {
          customers.map(c => {
            return <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          })
        }
      </div>
    );
  }
}

export default App;
