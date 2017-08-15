'use strict'

import {Component}          from 'react'
import {Link}               from 'react-router'
import DocumentTitle        from 'react-document-title'
import {bindActionCreators} from 'redux'
import {connect}            from 'react-redux'

import {BlogActions}       from '../datastore/Blog'
import {StatsActions}      from '../datastore/Stats'
import Image               from '../components/Image'
import Header              from '../components/Header'
import TokenBanner         from '../components/TokenBanner'
import ContentSection      from '../components/ContentSection'
import VideosPresentation  from '../components/VideosPresentation'

function mapStateToProps(state) {
  return {
    posts: state.blog.posts,
    stats: state.stats,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign({}, BlogActions, StatsActions),
    dispatch
  )
}

class FundingPage extends Component {

  render() {
    return (
      <DocumentTitle title="Blockstack Summit 2017">
        <div className="video-special-hero">
          <div className="col-centered block">
            <TokenBanner />
            <Header transparent={true} />
            <div className="container-fluid p-b-90">
              <div className="row">  
                <div className="container-fluid video-special-container">
                  <div class="embed-responsive embed-responsive-16by9 video-special">
                    <iframe class="embed-responsive-item" width="640px" height="360px" src="https://www.youtube.com/embed/Z7L7UY-isRA" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
              <section className="text-xs-center">
                <Image className="blockstack-summit-2017-logo-md m-t-65 m-b-55"
                  src="/images/logos/blockstack-summit-logo-landscape-rev.svg"
                  retinaSupport={false} />
                <h1 className="text-white m-b-20">Blockstack Signature Fund</h1>
                <p className="hero-lead text-white p-b-100">July 27th, 2017, Computer History Museum, Mountain View, CA</p>
                <Link to="/whitepaper.pdf" target="_blank" className="btn btn-outline-primary" 
                  style={{ color: '#95889c' }}>
                    Read the Whitepaper
                  </Link>
              </section>
            </div>
            <div className="sectionContainerLight section-spacing container-fluid">
              <div className="container">
                <section>
                  <div className="containWrap">
                    <ContentSection markup="
                      <p>
                        On July 27th, 2017, we hosted the Blockstack Summit at 
                        the Computer History Museum. It was a day to take 
                        people back to the original dream of the internet back 
                        in 1989 -- one of a shared space where we could be free 
                        to create together. Attendees and speakers from all 
                        over the world came together for this one day event to 
                        envision a new internet built for freedom, security, 
                        and innovation.
                      </p>
                      <p>
                        It was a star-studded lineup of speakers and they did 
                        not disappoint. You'll find videos and photos below 
                        from the event. We hope you enjoy them as much as we 
                        did, and would love to hear what your favorite parts 
                        were by tweeting your favorite speaker quotes and clips 
                        mentioning @blockstackorg.
                      </p>" />
                  </div>
                </section>
              </div>
            </div>
            <div className="feature-event-subhero-1">
              <div className="col-centered block">
                <div className="container summit-img-section">
                  <section className="text-xs-center p-b-80">
                  </section>
                </div>
              </div>
            </div>
            <div className="feature-event-subhero-2">
              <div className="col-centered block">
                <div className="container summit-img-section">
                  <section className="text-xs-center p-b-80">
                  </section>
                </div>
              </div>
            </div>
            <VideosPresentation />
          </div>
        </div>
      </DocumentTitle>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(FundingPage)