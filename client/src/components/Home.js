import React from 'react';
import FirstPage from './FirstPage'
import HomeItems from './HomeItems'
import Footer from './Footer'

class Home extends React.Component {
    state ={
        firstName :'',
        lastName:'',
        Email:'',
        Mobile:''
    }
    handleSubmit(e){
        e.preventDefault();


        var data = new URLSearchParams();
        //console.log(data)


        for(const pair of new FormData(e.target)){
            data.append(pair[0],pair[1])
        }
        
        fetch('/addUser',{
            method : "post",
            body : data,
        }).then(res => res.json())
        .then(res2 => console.log(res2));
        console.log("done")


    }
    render(){
        return(
            <div>
                <HomeItems />

                <FirstPage />

                <Footer />

            </div>
        );
        
    }

    }
   

export default Home;