import moment from 'moment'
import React, { Fragment, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {changeThemeAction, SearchAppAction} from '../redux/action/SearchAppActions'
import { CHANGE_THEME } from '../util/settings'
import NotFount from './NotFount'
import searchApp from './searchApp.css'
export default function SearchApp() {
    const user = useSelector(state => state.SearchAppReducer.user)
    const {isSearch} = useSelector(state => state.SearchAppReducer)
    const {changeTheme} = useSelector(state => state.SearchAppReducer)
    const dispatch = useDispatch();
    const inputEl = useRef(null);
    const inputWrong = useRef(null);

    var [theme, setTheme] = useState('search-app-dark search-app');

    const handleChangeTheme =(e) =>{

        dispatch(changeThemeAction());
        if(changeTheme){
            setTheme('search-app-dark search-app')
        }else{
            setTheme('search-app-light search-app')
        }
    }
  return (
    <div className={theme}>
            <div className='container-content'  >
                <div className='row d-flex' >
                        <h1 >Devfinder</h1>
                        <p >Light <button onClick={handleChangeTheme} className='btn btn-set-theme mr-2 ml-3'><i className="fas  fa-sun"></i></button> </p>
                </div>
                <div className='search'>
                    <nav className='d-flex' >
                        <i  className="fas i-search fa-search"></i>
                        <form   className="d-flex w-100 ">
                                    <input ref={inputEl}  className="form-control input-search me-2 mr-5" type="search" placeholder="Search GitHub Name..." aria-label="Search" />
                                    <button   onClick={(e)=>{
                                        e.preventDefault();
                                       dispatch(SearchAppAction(inputEl.current.value));
                                        }} className="btn btn-submit" type="submit">Search</button>
                                </form>  
                    </nav>
                </div>
                

               
                <Fragment>
                    {!user ? <NotFount/> : <div  className='row mt-5 content' >
                    <div  className='d-flex'>
                        <img  src='github-octocat.png' ></img>
                        <div className='content-first d-flex'>
                            <div>
                                <p>{user.name} </p>
                                <p className='text-primary' >{user.login}</p>
                                <p  >This profile has no bio</p>
                            </div>
                            <Fragment>
                                { isSearch ?  <div>Joined {moment(user.created_at).format('MMMM Do YYYY') }</div> : <div>Joined </div>}
                            </Fragment>
                           
                        </div>
                    </div>
                    <div className='content-second'  >
                        
                        <div className='detail mt-2 d-flex' >
                            <div>
                                <span>Repos : {user.public_repos} </span>
                            </div>
                            <div>
                                <span>Followers : {user.followers}</span>
                            </div>
                            <div>
                                <span>Fllowing : {user.following}</span>
                            </div>
                        </div>
                        
                        <div className='location mt-4' >
                            <div className='row'>
                                <div className='col-12 mt-3 col-sm-7'>
                                    <i className="fas mr-3 fa-map-marker-alt"></i>
                                    <span>{user.location}</span>
                                </div>
                                <div className='col-12 mt-3 col-sm-5'>
                                    <i className="fab mr-3 fa-twitter"></i>
                                    <Fragment>
                                        {user.twitter_username === null ? <span>Not available</span> : <span>{user.twitter_username}</span>}
                                    </Fragment>
                                    
                                </div>
                            </div>

                            <div className=' row'>
                                <div className='col-12 mt-3 col-sm-7'>
                                    <i className="fas mr-2 fa-link"></i>
                                    <span>{user.html_url}</span>
                                </div>
                                <div className='col-12 mt-3 col-sm-5'>
                                    <i className="fab fa-git mr-3"></i>
                                    <span>GitHub</span>
                                </div>
                            </div>
                          
                        </div>
                       
                    </div>
                </div>}
                </Fragment>


            </div>
        </div>
  )
}
