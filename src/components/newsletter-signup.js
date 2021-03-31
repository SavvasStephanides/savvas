import React from "react"
import "../style/signup.css"

export default function NewsletterSignUp(){
    return <section id="newsletter-signup">
        
        <div id="revue-embed">
            <h2 className="serif-font">Subscribe</h2>
            <div className="description sans-serif-font">
                Get the latest posts weekly straight to your inbox!
            </div>
            <form action="https://www.getrevue.co/profile/savvasstephnds/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
                <div className="revue-form-group">
                    <input title="Email address" className="revue-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email"/>
                </div>
                <div className="revue-form-actions">
                    <input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit"/>
                </div>
            </form>

            <div className="revue-form-footer sans-serif-font">By subscribing, you agree with Revue’s <a target="_blank" href="https://www.getrevue.co/terms">Terms</a> and <a target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.</div>
            
        </div>
    </section>
}