import React, { Component } from "react";
import "./term.css";
class faq extends Component {
  render() {
    return (
      <div>
        <div className="terms-image">
          <p className="text-center">Privacy Policy</p>
          <br />
        </div>
        <div className="container">
          <div
            class="panel-group"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="headingOne">
                <h4 class="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Khaas Food কি?
                  </a>
                </h4>
              </div>
              <div
                id="collapseOne"
                class="panel-collapse collapse in"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div class="panel-body">
                  <small>
                    Khaas Food একটি ভিন্নধর্মী ই-কমার্স প্লাটফর্ম যা আপনাকে দিবে
                    নিশ্চিন্তে কেনাকাটার সুবিধা। আপনার দুয়ারে গুনগত মানসম্পন্নও
                    ভেজালমুক্ত খাদ্য পৌঁছে দিতে Khaas Food সদা বদ্ধপরিকর যা
                    আপনাকে এনে দিবে শারীরিক,মানসিক, আত্মিক সুস্হতা ও প্রশান্তি।
                  </small>
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="headingTwo">
                <h4 class="panel-title">
                  <a
                    className="collapsed text-center"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Khaas Food কেন একটি ভিন্নধর্মী online e commerce platform?
                  </a>
                </h4>
              </div>
              <div
                id="collapseTwo"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div class="panel-body">
                  <small>
                    Khaas Food একটি ভিন্ন ধর্মী ই-কমার্স প্লাটফর্ম কারণ কথার
                    ফুলঝুরি সাজিয়ে নিম্নমানের কোন পণ্য বাজারজাতকরণ আমাদের লক্ষ্য
                    নয়।আমাদের লক্ষ্য বাজারের বাছাইকৃত এবং নিজেদের প্রতিনিধি
                    দ্বারা মান নিয়ন্ত্রিত গুনগত মানসম্পন্ন খাদ্যদ্রব্য আপনাদের
                    কাছে পৌঁছে দেয়া।
                  </small>
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="headingThree">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    মানসম্মত খাদ্য সরবরাহকারীর অপর নাম Khaas Food?
                  </a>
                </h4>
              </div>
              <div
                id="collapseThree"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div class="panel-body">
                  <small>
                    Khaas শব্দটির অর্থ হচ্ছে স্পেশাল তথা বিশেষ বা আলাদা কিছু।
                    গুনগত মানসম্পন্ন ও ভেজালমুক্ত খাদ্য সরবরাহের ক্ষেত্রে Khaas
                    Food আপোসহীন যা একে করেছে অন্য সবার থেকে আলাদা।
                  </small>
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="headingFour">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Khaas Food কি online ক্রয় সুবিধা দিয়ে থাকে?
                  </a>
                </h4>
              </div>
              <div
                id="collapseFour"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingFour"
              >
                <div class="panel-body">
                  <small>
                    হ্যাঁ। শুধু তাই নয় আপনি আপনার যেকোনো ক্রেডিট বা ডেবিট কার্ড
                    দিয়ে এমনকি যেকোনো Mobile Wallet দিয়েও আপনার পণ্য ক্রয় করতে
                    পারবেন। বিকাশ এর ক্ষেত্রে বিকাশ এরট্রানজেকশনফী
                    ক্লায়েন্টবহনকরবেন। আরো আছে COD বা ক্যাশ অন ডেলিভারি।
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default faq;
