import React from 'react';
import { Link } from 'react-router-dom';
//import mixitup from 'mixitup'

export default function About() {
  return (
    <>
    <div className="page-wrapper">

      <div className="page-title-section">
        <div className="auto-container">
          <h1>Blog</h1>
          <ul className="post-meta">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      
        {/* Blog Page Section */}
        <section className="blog-page-section">
          <div className="auto-container">
            {/*MixitUp Galery*/}
            <div className="mixitup-gallery">
              {/*Filter*/}
              <div className="filters clearfix">
                <ul className="filter-tabs filter-btns text-center clearfix">
                  <li className="active filter" data-role="button" data-filter="all">              all
                  </li>
                  <li className="filter" data-role="button" data-filter=".news">
                    news
                  </li>
                  <li className="filter" data-role="button" data-filter=".products">
                    products
                  </li>
                  <li
                    className="filter"
                    data-role="button"
                    data-filter=".inspiration"
                  >
                    inspiration
                  </li>
                  <li className="filter" data-role="button" data-filter=".community">
                    community
                  </li>
                  <li className="filter" data-role="button" data-filter=".others">
                    others
                  </li>
                </ul>
              </div>
              <div className="filter-list row clearfix">
                {/* News Block */}
                <div className="mix all others community products inspiration col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image">
                      <a href="blog-detail.html">
                        <img src="./assets/images/resource/news-1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="lower-content">
                      <div className="title">inspiration</div>
                      <h4>
                        <a href="blog-detail.html">
                          How to improve the flow of UI/UX &amp; delivery its in your
                          team in way effective
                        </a>
                      </h4>
                      <div className="post-date">December 25, 2020</div>
                    </div>
                  </div>
                </div>
                {/* News Block */}
                <div className="mix all others community col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image">
                      <a href="blog-detail.html">
                        <img src="./assets/images/resource/news-2.jpg" alt="" />
                      </a>
                    </div>
                    <div className="lower-content">
                      <div className="title">Products</div>
                      <h4>
                        <a href="blog-detail.html">
                          Unore become 1st winner at CSS Award with Uber cases in 2020
                        </a>
                      </h4>
                      <div className="post-date">December 25, 2020</div>
                    </div>
                  </div>
                </div>
                {/* News Block */}
                <div className="mix all others col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image">
                      <a href="blog-detail.html">
                        <img src="./assets/images/resource/news-3.jpg" alt="" />
                      </a>
                    </div>
                    <div className="lower-content">
                      <div className="title">community</div>
                      <h4>
                        <a href="blog-detail.html">
                          How to choose stock photos fit with your project. Color,
                          blending, restock, etc.
                        </a>
                      </h4>
                      <div className="post-date">December 25, 2020</div>
                    </div>
                  </div>
                </div>
                {/* News Block */}
                <div className="mix all inspiration community others col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image">
                      <a href="blog-detail.html">
                        <img src="./assets/images/resource/news-4.jpg" alt="" />
                      </a>
                    </div>
                    <div className="lower-content">
                      <div className="title">inspiration</div>
                      <h4>
                        <a href="blog-detail.html">
                          Best 20 Excellent Photographer at Claudio Schwarz Award in
                          Paris, France
                        </a>
                      </h4>
                      <div className="post-date">December 22, 2020</div>
                    </div>
                  </div>
                </div>
                {/* News Block */}
                <div className="news-block mix all news community col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image">
                      <a href="blog-detail.html">
                        <img src="./assets/images/resource/news-5.jpg" alt="" />
                      </a>
                    </div>
                    <div className="lower-content">
                      <div className="title">News</div>
                      <h4>
                        <a href="blog-detail.html">
                          ABC Launch New Digital eCommerce Experience for Niken
                          Athletic
                        </a>
                      </h4>
                      <div className="post-date">November 7, 2020</div>
                    </div>
                  </div>
                </div>
                {/* News Block */}
                <div className="news-block mix all products inspiration col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image">
                      <a href="blog-detail.html">
                        <img src="./assets/images/resource/news-6.jpg" alt="" />
                      </a>
                    </div>
                    <div className="lower-content">
                      <div className="title">product</div>
                      <h4>
                        <a href="blog-detail.html">
                          Unore become Winner of Best Portfolio Website 2019 on
                          99Design.com
                        </a>
                      </h4>
                      <div className="post-date">November 3, 2020</div>
                    </div>
                  </div>
                </div>
                {/* News Block */}
                <div className="news-block mix all news products col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image">
                      <a href="blog-detail.html">
                        <img src="./assets/images/resource/news-7.jpg" alt="" />
                      </a>
                    </div>
                    <div className="lower-content">
                      <div className="title">community</div>
                      <h4>
                        <a href="blog-detail.html">
                          Workflow &amp; Enhance the User Experience with Design
                          System
                        </a>
                      </h4>
                      <div className="post-date">December 22, 2020</div>
                    </div>
                  </div>
                </div>
                {/* News Block */}
                <div className="news-block mix all news inspiration col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image">
                      <a href="blog-detail.html">
                        <img src="./assets/images/resource/news-8.jpg" alt="" />
                      </a>
                    </div>
                    <div className="lower-content">
                      <div className="title">inspiration</div>
                      <h4>
                        <a href="blog-detail.html">Predict Color Pantone 2020</a>
                      </h4>
                      <div className="post-date">November 7, 2020</div>
                    </div>
                  </div>
                </div>
                {/* News Block */}
                <div className="news-block mix all community inspiration col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image">
                      <a href="blog-detail.html">
                        <img src="./assets/images/resource/news-9.jpg" alt="" />
                      </a>
                    </div>
                    <div className="lower-content">
                      <div className="title">news</div>
                      <h4>
                        <a href="blog-detail.html">
                          How to use lens combine light in the photography
                        </a>
                      </h4>
                      <div className="post-date">November 3, 2020</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Paginations */}
              <div className="pagination-outer">
                <div className="styled-pagination text-center">
                  <ul className="clearfix">
                    <li className="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>...</li>
                    <li>
                      <a href="#">15</a>
                    </li>
                    <li>
                      <a href="#">16</a>
                    </li>
                    <li className="next">
                      <a href="#">
                        <span className="icofont-double-right" />{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
    


      {/* <section className="blog-page-section">
        <div className="auto-container">
          <div className="mixitup-gallery">
            <div className="filters clearfix">
              <ul className="filter-tabs filter-btns text-center clearfix">
                <li className="active filter" data-role="button" data-filter="all"> all </li>
                <li className="filter" data-role="button" data-filter=".news"> news </li>
                <li className="filter" data-role="button" data-filter=".products"> products </li>
                <li className="filter" data-role="button" data-filter=".inspiration"> inspiration </li>
                <li className="filter" data-role="button" data-filter=".community"> community </li>
                <li className="filter" data-role="button" data-filter=".others"> others </li>
              </ul>
            </div>
            <div className="filter-list row clearfix">
              <div className="mix all others community products inspiration col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/blog-detail">
                      <img src="./assets/images/resource/news-1.jpg" alt="news-1" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <div className="title">inspiration</div>
                    <h4>
                      <Link to="/blog-detail">
                        How to improve the flow of UI/UX &amp; delivery its in your
                        team in way effective
                      </Link>
                    </h4>
                    <div className="post-date">December 25, 2020</div>
                  </div>
                </div>
              </div>
              <div className="mix all others community col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/blog-detail">
                      <img src="./assets/images/resource/news-2.jpg" alt="news-2" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <div className="title">Products</div>
                    <h4>
                      <Link to="/blog-detail">
                        Unore become 1st winner at CSS Award with Uber cases in 2020
                      </Link>
                    </h4>
                    <div className="post-date">December 25, 2020</div>
                  </div>
                </div>
              </div>
              <div className="mix all others col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/blog-detail">
                      <img src="./assets/images/resource/news-3.jpg" alt="news-3" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <div className="title">community</div>
                    <h4>
                      <Link to="/blog-detail">
                        How to choose stock photos fit with your project. Color,
                        blending, restock, etc.
                      </Link>
                    </h4>
                    <div className="post-date">December 25, 2020</div>
                  </div>
                </div>
              </div>
              <div className="mix all inspiration community others col-lg-4 col-md-6 col-sm-12" style={{ display: "inline-block" }}>
                <div className="inner-box">
                  <div className="image">
                    <Link to="/blog-detail">
                      <img src="./assets/images/resource/news-4.jpg" alt="news-4" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <div className="title">inspiration</div>
                    <h4>
                      <Link to="/blog-detail">
                        Best 20 Excellent Photographer at Claudio Schwarz Award in
                        Paris, France
                      </Link>
                    </h4>
                    <div className="post-date">December 22, 2020</div>
                  </div>
                </div>
              </div>
              <div className=" mix all news community col-lg-4 col-md-6 col-sm-12" style={{ display: "inline-block" }}>
                <div className="inner-box">
                  <div className="image">
                    <Link to="/blog-detail">
                      <img src="./assets/images/resource/news-5.jpg" alt="news-5" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <div className="title">News</div>
                    <h4>
                      <Link to="/blog-detail">
                        ABC Launch New Digital eCommerce Experience for Niken
                        Athletic
                      </Link>
                    </h4>
                    <div className="post-date">November 7, 2020</div>
                  </div>
                </div>
              </div>
              <div className=" mix all products inspiration col-lg-4 col-md-6 col-sm-12" style={{ display: "inline-block" }}>
                <div className="inner-box">
                  <div className="image">
                    <a href="blog-detail.html">
                      <img src="./assets/images/resource/news-6.jpg" alt="news-6" />
                    </a>
                  </div>
                  <div className="lower-content">
                    <div className="title">product</div>
                    <h4>
                      <a href="blog-detail.html">
                        Unore become Winner of Best Portfolio Website 2019 on
                        99Design.com
                      </a>
                    </h4>
                    <div className="post-date">November 3, 2020</div>
                  </div>
                </div>
              </div>
              <div className=" mix all news products col-lg-4 col-md-6 col-sm-12" style={{ display: "inline-block" }}>
                <div className="inner-box">
                  <div className="image">
                    <Link to="/blog-detail">
                      <img src="./assets/images/resource/news-7.jpg" alt="news-7" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <div className="title">community</div>
                    <h4>
                      <a href="blog-detail.html">
                        Workflow &amp; Enhance the User Experience with Design
                        System
                      </a>
                    </h4>
                    <div className="post-date">December 22, 2020</div>
                  </div>
                </div>
              </div>
              <div className="news-block mix all news inspiration col-lg-4 col-md-6 col-sm-12" style={{ display: "inline-block" }}>
                <div className="inner-box">
                  <div className="image">
                    <Link to="/blog-detail">
                      <img src="./assets/images/resource/news-8.jpg" alt="news-8" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <div className="title">inspiration</div>
                    <h4>
                      <a href="blog-detail.html">Predict Color Pantone 2020</a>
                    </h4>
                    <div className="post-date">November 7, 2020</div>
                  </div>
                </div>
              </div>
              <div className="news-block mix all community inspiration col-lg-4 col-md-6 col-sm-12" >
                <div className="inner-box">
                  <div className="image">
                    <Link to="/blog-detail">
                      <img src="./assets/images/resource/news-9.jpg" alt="news-9" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <div className="title">news</div>
                    <h4>
                      <a href="blog-detail.html">
                        How to use lens combine light in the photography
                      </a>
                    </h4>
                    <div className="post-date">November 3, 2020</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pagination-outer">
              <div className="styled-pagination text-center">
                <ul className="clearfix">  
                  <li className="active">
                    <a href="/#">1</a>
                  </li>
                  <li>
                    <a href="/#">2</a>
                  </li>
                  <li>
                    <a href="/#">3</a>
                  </li>
                  <li>
                    <a href="/#">4</a>
                  </li>
                  <li>...</li>
                  <li>
                    <a href="/#">15</a>
                  </li>
                  <li>
                    <a href="/#">16</a>
                  </li>
                  <li className="next">
                    <a href="/#">
                      <span className="icofont-double-right" />{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
      </>
  )
}

//  <section className="blog-page-section">
//         <div className="auto-container">
//           {/*MixitUp Galery*/}
//           <div className="mixitup-gallery">
//             {/*Filter*/}
//             <div className="filters clearfix">
//               <ul className="filter-tabs filter-btns text-center clearfix">
//                 <li className="filter active" data-role="button" data-filter=".all">
//                   all
//                 </li>
//                 <li className="filter" data-role="button" data-filter=".news">
//                   news
//                 </li>
//                 <li className="filter" data-role="button" data-filter=".products">
//                   products
//                 </li>
//                 <li className="filter" data-role="button" data-filter=".inspiration">
//                   inspiration
//                 </li>
//                 <li className="filter" data-role="button" data-filter=".community">
//                   community
//                 </li>
//                 <li className="filter" data-role="button" data-filter=".others">
//                   others
//                 </li>
//               </ul>
//             </div>

//             <div className="filter-list row clearfix" id="MixItUp127F15">
//               {/* News Block */}
//               <div className="news-block mix all others community products inspiration col-lg-4 col-md-6 col-sm-12"
//                 style={{ display: "inline-block" }}>
//                 <div className="inner-box">
//                   <div className="image">
//                     <a href="/blog-detail">
//                       <img src="./assets/images/resource/news-1.jpg" alt="" />
//                     </a>
//                   </div>
//                   <div className="lower-content">
//                     <div className="title">inspiration</div>
//                     <h4>
//                       <a href="blog-detail.html">
//                         How to improve the flow of UI/UX &amp; delivery its in your
//                         team in way effective
//                       </a>
//                     </h4>
//                     <div className="post-date">December 25, 2020</div>
//                   </div>
//                 </div>
//               </div>
//               {/* News Block */}
//               <div
//                 className="news-block mix all others community col-lg-4 col-md-6 col-sm-12"
//                 style={{ display: "inline-block" }}
//               >
//                 <div className="inner-box">
//                   <div className="image">
//                     <a href="/blog-detail">
//                       <img src="./assets/images/resource/news-2.jpg" alt="" />
//                     </a>
//                   </div>
//                   <div className="lower-content">
//                     <div className="title">Products</div>
//                     <h4>
//                       <a href="blog-detail.html">
//                         Unore become 1st winner at CSS Award with Uber cases in 2020
//                       </a>
//                     </h4>
//                     <div className="post-date">December 25, 2020</div>
//                   </div>
//                 </div>
//               </div>
//               {/* News Block */}
//               <div
//                 className="news-block mix all others col-lg-4 col-md-6 col-sm-12"
//                 style={{ display: "inline-block" }}
//               >
//                 <div className="inner-box">
//                   <div className="image">
//                     <a href="blog-detail.html">
//                       <img src="./assets/images/resource/news-3.jpg" alt="" />
//                     </a>
//                   </div>
//                   <div className="lower-content">
//                     <div className="title">community</div>
//                     <h4>
//                       <a href="blog-detail.html">
//                         How to choose stock photos fit with your project. Color,
//                         blending, restock, etc.
//                       </a>
//                     </h4>
//                     <div className="post-date">December 25, 2020</div>
//                   </div>
//                 </div>
//               </div>
//               {/* News Block */}
//               <div
//                 className="news-block mix all inspiration community others col-lg-4 col-md-6 col-sm-12"
//                 style={{ display: "inline-block" }}
//               >
//                 <div className="inner-box">
//                   <div className="image">
//                     <a href="blog-detail.html">
//                       <img src="./assets/images/resource/news-4.jpg" alt="" />
//                     </a>
//                   </div>
//                   <div className="lower-content">
//                     <div className="title">inspiration</div>
//                     <h4>
//                       <a href="blog-detail.html">
//                         Best 20 Excellent Photographer at Claudio Schwarz Award in
//                         Paris, France
//                       </a>
//                     </h4>
//                     <div className="post-date">December 22, 2020</div>
//                   </div>
//                 </div>
//               </div>
//               {/* News Block */}
//               <div
//                 className="news-block mix all news community col-lg-4 col-md-6 col-sm-12"
//                 style={{ display: "inline-block" }}
//               >
//                 <div className="inner-box">
//                   <div className="image">
//                     <a href="blog-detail.html">
//                       <img src="./assets/images/resource/news-5.jpg" alt="" />
//                     </a>
//                   </div>
//                   <div className="lower-content">
//                     <div className="title">News</div>
//                     <h4>
//                       <a href="blog-detail.html">
//                         ABC Launch New Digital eCommerce Experience for Niken Athletic
//                       </a>
//                     </h4>
//                     <div className="post-date">November 7, 2020</div>
//                   </div>
//                 </div>
//               </div>
//               {/* News Block */}
//               <div
//                 className="news-block mix all products inspiration col-lg-4 col-md-6 col-sm-12"
//                 style={{ display: "inline-block" }}
//               >
//                 <div className="inner-box">
//                   <div className="image">
//                     <a href="blog-detail.html">
//                       <img src="./assets/images/resource/news-6.jpg" alt="" />
//                     </a>
//                   </div>
//                   <div className="lower-content">
//                     <div className="title">product</div>
//                     <h4>
//                       <a href="blog-detail.html">
//                         Unore become Winner of Best Portfolio Website 2019 on
//                         99Design.com
//                       </a>
//                     </h4>
//                     <div className="post-date">November 3, 2020</div>
//                   </div>
//                 </div>
//               </div>
//               {/* News Block */}
//               <div
//                 className="news-block mix all news products col-lg-4 col-md-6 col-sm-12"
//                 style={{ display: "inline-block" }}
//               >
//                 <div className="inner-box">
//                   <div className="image">
//                     <a href="blog-detail.html">
//                       <img src="./assets/images/resource/news-7.jpg" alt="" />
//                     </a>
//                   </div>
//                   <div className="lower-content">
//                     <div className="title">community</div>
//                     <h4>
//                       <a href="blog-detail.html">
//                         Workflow &amp; Enhance the User Experience with Design System
//                       </a>
//                     </h4>
//                     <div className="post-date">December 22, 2020</div>
//                   </div>
//                 </div>
//               </div>
//               {/* News Block */}
//               <div
//                 className="news-block mix all news inspiration col-lg-4 col-md-6 col-sm-12"
//                 style={{ display: "inline-block" }}
//               >
//                 <div className="inner-box">
//                   <div className="image">
//                     <a href="blog-detail.html">
//                       <img src="./assets/images/resource/news-8.jpg" alt="" />
//                     </a>
//                   </div>
//                   <div className="lower-content">
//                     <div className="title">inspiration</div>
//                     <h4>
//                       <a href="blog-detail.html">Predict Color Pantone 2020</a>
//                     </h4>
//                     <div className="post-date">November 7, 2020</div>
//                   </div>
//                 </div>
//               </div>
//               {/* News Block */}
//               <div
//                 className="news-block mix all community inspiration col-lg-4 col-md-6 col-sm-12"
//                 style={{ display: "inline-block" }}
//               >
//                 <div className="inner-box">
//                   <div className="image">
//                     <a href="blog-detail.html">
//                       <img src="./assets/images/resource/news-9.jpg" alt="" />
//                     </a>
//                   </div>
//                   <div className="lower-content">
//                     <div className="title">news</div>
//                     <h4>
//                       <a href="blog-detail.html">
//                         How to use lens combine light in the photography
//                       </a>
//                     </h4>
//                     <div className="post-date">November 3, 2020</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Paginations */}
//             <div className="pagination-outer">
//               <div className="styled-pagination text-center">
//                 <ul className="clearfix">
//                   <li className="active">
//                     <a href="#">1</a>
//                   </li>
//                   <li>
//                     <a href="#">2</a>
//                   </li>
//                   <li>
//                     <a href="#">3</a>
//                   </li>
//                   <li>
//                     <a href="#">4</a>
//                   </li>
//                   <li>...</li>
//                   <li>
//                     <a href="#">15</a>
//                   </li>
//                   <li>
//                     <a href="#">16</a>
//                   </li>
//                   <li className="next">
//                     <a href="#">
//                       <span className="icofont-double-right" />{" "}
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
// </section>
