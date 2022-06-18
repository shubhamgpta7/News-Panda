import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles = [
    {
      "source": {
      "id": "the-washington-post",
      "name": "The Washington Post"
      },
      "author": "Amy Cheng, Adela Suliman, Victoria Bisset",
      "title": "Latest Russia-Ukraine war news: Live updates - The Washington Post",
      "description": "U.S. officials say the danger of Russia swallowing Ukraine and becoming more emboldened is worth risking a long war and potential global economic turmoil.",
      "url": "https://www.washingtonpost.com/world/2022/06/18/russia-ukraine-war-putin-news-live-updates/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/LUBLO6XOOMI6ZH4QPHPR7MUCSY.jpg&w=1440",
      "publishedAt": "2022-06-18T09:15:00Z",
      "content": null
    },
    {
      "source": {
      "id": null,
      "name": "TMZ"
      },
      "author": "TMZ Staff",
      "title": "Johnny Depp Fans Pushing 'Camille Vasquez for President' Merch - TMZ",
      "description": "Camille Vasquez for President merch for sale for Johnny Depp's Lawyer.",
      "url": "https://www.tmz.com/2022/06/18/camille-vasquez-johnny-depp-president-merch-sale/",
      "urlToImage": "https://imagez.tmz.com/image/12/16by9/2022/06/17/120bfd87999643778588d87949c636f0_xl.jpg",
      "publishedAt": "2022-06-18T08:00:00Z",
      "content": "Johnny Depp's fans not only have love for the actor ... they're showering his lawyer with the highest honor in the land ... pushing for her to become the first woman Prez!\r\nDepp fans have plastered C… [+828 chars]"
    },
    {
      "source": {
      "id": "fox-news",
      "name": "Fox News"
      },
      "author": "Landon Mion",
      "title": "Bill Cosby civil trial jury will have to restart deliberations after nearly reaching verdict - Fox News",
      "description": "The jury in the trial for sexual misconduct allegations against Bill Cosby must restart deliberations after answering nearly every question on the verdict form.",
      "url": "https://www.foxnews.com/entertainment/bill-cosby-civil-trial-jury-restart-deliberations",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/06/2017-06-16T162453Z_1284511624_RC1D09AD0290_RTRMADP_3_PEOPLE-COSBY.jpg",
      "publishedAt": "2022-06-18T07:56:11Z",
      "content": "Jurors in the civil trial for sexual misconduct allegations against actor and comedian Bill Cosby must start deliberations over after reaching a verdict on Friday for nearly all the questions asked o… [+3842 chars]"
    },
    {
      "source": {
      "id": null,
      "name": "YouTube"
      },
      "author": null,
      "title": "Warriors Fans at Chase Center Celebrate After Watching 2022 NBA Championship Win in Game 6 - NBC Bay Area",
      "description": "The Golden State Warriors won their fourth NBA championship in just eight years with a 103-90 win against the Boston Celtics in Game 6 Thursday night. The ga...",
      "url": "https://www.youtube.com/watch?v=BZjnlrGlKLg",
      "urlToImage": "https://i.ytimg.com/vi/BZjnlrGlKLg/maxresdefault.jpg",
      "publishedAt": "2022-06-18T05:01:27Z",
      "content": null
    },
    {
      "source": {
      "id": null,
      "name": "San Francisco Chronicle"
      },
      "author": "Lauren Hernández",
      "title": "Three travelers attacked at San Francisco International Airport, suspect in custody - San Francisco Chronicle",
      "description": "The travelers were in the pre-security public area of the International Terminal when...",
      "url": "https://www.sfchronicle.com/bayarea/article/Three-travelers-attacked-at-San-Francisco-17250402.php",
      "urlToImage": "https://s.hdnux.com/photos/01/22/61/26/21697967/15/rawImage.jpg",
      "publishedAt": "2022-06-18T04:16:30Z",
      "content": "Three travelers were attacked by a man with an edged weapon at San Francisco International Airport on Friday evening, authorities said.San Francisco police said a man drove a vehicle into the airport… [+1460 chars]"
    },
    {
      "source": {
      "id": "cbs-news",
      "name": "CBS News"
      },
      "author": "Faris Tanyos",
      "title": "Production crew for Stephen Colbert's \"Late Show\" detained in congressional building near U.S. Capitol - CBS News",
      "description": "They were part of a team filming a comedy segment for \"Triumph the Insult Comic Dog.\"",
      "url": "https://www.cbsnews.com/news/stephen-colbert-show-detained-production-crew-triumph-insult-dog-capitol-police-congressional-offices/",
      "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2022/06/18/7b68cb7c-0491-4e42-bd4f-70b4e2061e32/thumbnail/1200x630/b5ca1ec1ca3e1900b94d4bf78ad2d389/gettyimages-1403319023.jpg",
      "publishedAt": "2022-06-18T03:57:13Z",
      "content": "Several members of a production crew with for \"The Late Show With Stephen Colbert\" were detained Thursday night in a congressional office building near the U.S. Capitol, CBS said Friday. The group wa… [+1901 chars]"
    },
    {
      "source": {
      "id": "fox-news",
      "name": "Fox News"
      },
      "author": "Fox News Staff",
      "title": "Biden administration's communication strategy 'patently horrible': Fox News contributor Joe Concha - Fox News",
      "description": "Fox News contributor Joe Concha and former White House chief of staff Priebus critiqued President Biden’s communication strategy and approval rating on \"Hannity.\"",
      "url": "https://www.foxnews.com/media/biden-administrations-communication-strategy-fox-news-contributor-joe-concha",
      "urlToImage": "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/9d8daf09-22fe-4b5d-af38-ad275b0cee16/a7711627-f4ba-481b-b2ee-694b9123a05f/1280x720/match/image.jpg",
      "publishedAt": "2022-06-18T03:54:39Z",
      "content": "Fox News contributor Joe Concha dubbed the Biden administration's communication strategy \"crap-tastically, patently horrible\" and former White House chief of staff Reince Priebus weighed in Friday on… [+1436 chars]"
    }
    
  ]

  constructor(){
    super();
    this.state = {
      articles : this.articles,
      loading : false
    }
  }


  render() {
    return (
      <div className='container my-3'>
        <h2>News Panda - Top Headlines </h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col md-4" key={element.url}>
          <NewsItem 
          title={element.title.slice(0,45)} 
          description={element.description.slice(0,88)} 
          imageUrl={element.urlToImage} 
          newsUrl={element.url}/>
        </div> 
        })}
        </div>
      </div>
    )
  }
}

export default News