import React from "react";
import io from "socket.io-client";
import Avatar from "./Avatar";
import UserName from "./UserName";
import UserTweet from "./UserTweet";


class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tweets: []
        };

        this.socket = io('localhost:8080');

        this.socket.on("newTweet", data => {
            var joinedTweets = this.state.tweets.concat(data);
            this.setState({ tweets: joinedTweets })
        });


    }

    componentWillMount() {
        this.socket.on("initalTweets", data => {
            this.setState({ tweets: data });
        });

    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount() {
    this.scrollToBottom();
    }

    componentDidUpdate() {
    this.scrollToBottom();
    }

    render() {
        const tweetfeed = this.state.tweets;
        let tweetItems = tweetfeed.map((tweet, index) => {
            return ( <
                div  key = { index } className = "row justify-content-md-center tweet-row" >
                <
                div 
                className = "col-sm"
                >

                <
                div className = "row justify-content-md-center" >
                <
                div className = "col col-lg-2" >
                <Avatar user={tweet.user} />
                < /
                div >

                <
                /div>

                <
                div className = "row justify-content-md-center" >
                <
                div className = "col col-lg-2" >
                <UserName username={tweet.user.name} />
                < /
                div >
                <
                /div>

                <
                /div >  <
                div className = "col-sm-9" > 
                <UserTweet text={tweet.text} />
                </div>
                <
                /div>
            )
        })

        return (
            <div>
            <div className="jumbotron">
                <h1>All Tweets related to Scorpion</h1>
            </div>
             <
            div className = "container" >


         

            <
            div className = "messages" > { tweetItems } <
            /div>   < /
            div >

            <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
            </div>

        );
    }
}

export default Chat;