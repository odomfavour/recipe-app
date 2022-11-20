import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/Framee.svg"


const PrivacyPolicy = () => {
    return (
       <div className="xl:mx-32 lg:mx-24 md:mx-14 mx-10">
            <div className="relative mt-10 mb-12 text-center">
                <img className="rounded-xl" src={image} alt="background" />
                <div className="absolute inset-x-0 top-0 xl:py-28 lg:py-20 md:py-16 sm:py-8 py-2 text-white">
                    <h1 className="md:text-3xl text-2xl font-semibold pb-2">Privacy & Policy</h1>
                    <p className="text-sm">Last Updated: November 2022</p>
                </div>
            </div>
            <div className="text-sm text-gray-600 mb-32">
                <p>This privacy notice for <span className="text-orange-600">KitchenDiary</span> (Company we us or our), describes how and why we might collect, store, use, and/or share (“process”) your information when you use our services (Services), such as when you:</p>
                <ul className="list-disc ml-4 py-4">
                    <li>Download and use our mobile application (<span className="text-orange-600">Kitchen Diary</span>), or any other application of Ours that links to this privacy notice</li>
                    <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                </ul>
                <p><span className="text-orange-600">Questions or concerns?</span> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at….</p>
                <h2 className="text-orange-600 font-bold pt-4">SUMMARY OF KEY POINTS</h2>
                <p className="pb-4">This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also click here to go directly to our table of contents.</p>
                <p className="pb-4"><span className="text-orange-600">What personal information do we process?</span> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with KitchenDiary and the Services, the choices you make, and the products and features you use.</p>
                <p className="pb-4"><span className="text-orange-600">Do we process any sensitive personal information?</span> We do not process sensitive personal information.</p>
                <p className="pb-4"><span className="text-orange-600">Do we receive any information from third parties?</span> We do not receive any information from third parties.</p>
                <p className="pb-4"><span className="text-orange-600">How do we process your information?</span> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.</p>
                <p className="pb-4"><span className="text-orange-600">In what situations and with which parties do we share personal information?</span> We may share information in specífic situations and with specific third parties.</p>
                <p className="pb-4"><span className="text-orange-600">How do we keep your information safe?</span> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. </p>
                <p className="pb-4"><span className="text-orange-600">What are your rights?</span> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information..</p>
                <p className="pb-4"><span className="text-orange-600">How do you exercise your rights?</span> The easiest way to exercise your rights is by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
                <h3 className="text-orange-600">TABLE OF CONTENT</h3>
                <ol className="list-decimal ml-4 text-xs text-blue-400">
                    <li><a href="#info">WHAT INFORMATION DO WE COLLECT?</a></li>
                    <li><a href="#process">HOW DO WE PROCESS YOUR INFORMATION?</a></li>
                    <li><a href="#legal">WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</a></li>
                    <li><a href="#share">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></li>
                    <li><a href="#website">WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</a></li>
                    <li><a href="#cookies">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></li>
                    <li><a href="#keep">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
                    <li><a href="#safe">HOW DO WE KEEP YOUR INFORMATION SAFE?</a></li>
                    <li><a href="#minors">DO WE COLLECT INFORMATION FROM MINORS?</a></li>
                    <li><a href="#rights">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
                    <li><a href="#features">CONTROLS FOR DO-NOT TRACK FEATURES</a></li>
                    <li><a href="#update">DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
                    <li><a href="#notice">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
                    <li><a href="#review">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
                </ol>

                    <p id="info" className="text-orange-600 py-4 text-xs"> 1. WHAT INFORMATION DO WE COLLECT? </p>
                    <p> Personal information you disclose to us </p>
                    <p> In Short: We collect personal information that you provide to us.</p>
                    <p> We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us. </p>
                    <p> Personal lInformation Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following: </p>
                    <ul className="list-disc ml-4">
                        <li>usernames</li>
                        <li>passwords</li>
                    </ul>
                    <p>Sensitive Information. We do not process sensitive information.</p>



                    <p id="process" className="text-orange-600 py-4 text-xs"> 2. HOW DO WE PROCESS YOUR INFORMATION? </p>
                    <p> In Short: We process your information to provide, improve, and administer our Services,
                        communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. </p>
                    <p> We process your personal information for a variety of reasons, depending on ho you interact
                        with our Services, including: </p>
                    <ul className="list-disc ml-4">
                        <li>To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
                        <li>To save or protect an individuaľs vital interest. We may process your information when necessary to save or protect an individuals vital interest, such as to prevent harm.</li>
                    </ul>


                    <p id="legal" className="text-orange-600 py-4 text-xs"> 3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</p>
                    <p>In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</p>
                    <p>If you are located in the EU or UK this section applies to you.</p>
                    <p>The General Data Protection Regulation (GDPR) and Uk GDPR require us to explain the valid</p>
                        legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
                    <ul className="list-disc ml-4">
                        <li>Consent. We may process your information if you have given us permission (i.e.consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.</li>
                        <li>Legal Obligations. We may process your information where we believe it is necessary for
                        compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as
                        evidence in litigation in which we are involved.</li>
                        <li>Vital Interests. We may process your information where we believe it is necessary to
                        protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person. <br />
                        If you are located in Canada, this section applies to you. <br />
                        We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your
                        permission can be inferred (i.e.implied consent). You can withdraw your consent at any time. <br />
                        In some exceptional cases, we may be legally permitted under applicable law to process your
                        information without your consent, including, for example:</li>
                        <ul className="list-disc ml-4">
                            <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
                            <li>For investigations and fraud detection and prevention</li>
                            <li>For business transactions provided certain conditions are met</li>
                            <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
                            <li>For identifying injured, ill, or deceased persons and communicating With next of kin</li>
                            <li>if we have reasonable grounds to believe an individual has been, is, or may be victim of Financial abuse</li>
                            <li>If it is reasonable to expect collection and use wth consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
                            <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
                            <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
                            <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
                            <li>If the information is publicly available and is specified by the regulations</li>
                        </ul>
                    </ul>

                    <p id="share" className="text-orange-600py-4 text-xs ">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</p>
                        In Short: We may share information in specific situations described in this section and/or with the following third parties.
                        We may need to share your personal information in the following sítuations:
                    <ul className="list-disc ml-4">
                       <li>Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                    </ul>

                    <p id="website" className="text-orange-600 py-4 text-xs">5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</p>
                        In Short: We are not responsible for the safety of any information that you share with third parties that we may link to or who advertise on our Services, but are not affiliated with, our Services. The Services may link to third-party websites, online services, or mobile applications and/or contain advertisements from third parties that are not affiliated with us and which may link to other websites, services, or applications. Accordingly, we do not make any guarantee regarding any such third parties, and we will not be liable for any loss or damage caused by the use of such third-party websites, services, or applications. The inclusion of a link towards a third-party website, service, or application does not imply an endorsement by us. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services, or applications that may be linked to or from the Services. You should review the policies of such third parties and contact them directly to respond to your questions.

                    <p id="cookies" className="text-orange-600 py-4 text-xs">6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</p>
                        In Short: We may use cookies and other tracking technologies to collect and store your information. <br />
                        We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.

                    <p id="keep" className="text-orange-600 py-4 text-xs">7. HOW LONG DO WE KEEP YOUR INFORMATION?</p>
                        In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law. <br />
                        We will only keep your personal information for as long as it is necessary for the purposes set Out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us to keep your personal information for longer than the period of time in which users have an account with us.
                        When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we ill securely store your personal information and isolate it from any further processing until deletion is possible.

                    <p id="safe" className="text-orange-600 py-4 text-xs">8. HOW DO WE KEEP YOUR INFORMATION SAFE?</p>
                        In Short: We aim to protect your personal information through a system of organizational and technical security measures.
                        We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.

                    <p id="minors" className="text-orange-600 py-4 text-xs">9. DO WE COLLECT INFORMATION FROM MINORS?</p>
                        In Short: We do not knowingly collect data from or market to children under 18 years of age.
                        We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. lIf you become aware of any data we may have collected from children under age 18, please contact us at kitchendiary@gmail.com

                    <p id="rights" className="text-orange-600 py-4 text-xs">10. WHAT ARE YOUR PRIVACY RIGHTS?</p>
                        In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal
                        information. You may review, change, or terminate your account at any time.
                        In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (0 to request access and obtain a copy of your personal information, (1) to request rectification or erasure; (in) to restrict the processing of your personal information, and (V) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section - <Link to="#" className="text-blue-400 text-xs">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Link> below. <br />
                        We will consider and act upon any request in accordance with applicable data protection laws.
                        If you are located in the EEA or UK and you believe we are unlawfully processing your personal
                        information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: https://ec.europa.eu/justice/dataprotection
                        /bodies/authorities/index_en.htm.
                        If you are located in Switzerland, the contact details for the data protection authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.
                        Withdrawing your consent; If we are relying on your consent to process your personal
                        information, which may be expressed and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section - <Link to="#" className="text-blue-400 text-xs">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Link> below or updating your preferences.
                        However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                        Account Information <br />
                        If you would at any time like to review or change the information in your account or terminate your account, you can
                        <ul className="list-disc ml-4">
                            <li>Log in to your account settings and update your user account.
                            Upon your request to terminate your account, we ill deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
                            Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If
                            you prefer, you can usually choose to set your browser to remove cookies and to reject cookies.
                            If you choose to remove cookies or reject cookies, this could affect certain features or services.
                            If you have questions or comments about your privacy rights, you may email us at privacy@kitchendiary.com</li>
                        </ul>
                    <p id="features" className="text-orange-600 py-4 text-xs">11. CONTROLS FOR DO-NOT-TRACK FEATURES</p>
                        Most web browsers and some mobile operating systems and mobile applications include a Do- Not-Irack (DNT) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized.
                        As such, we do not currently respond to DNT browser signals or any other mechanism that
                        automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.

                    <p id="update" className="text-orange-600 py-4 text-xs">12. DO WE MAKE UPDATES TO THIS NOTICE?</p>
                        In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.
                        We may update this privacy notice from time to time. The updated version will be indicated by an updated Revised date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.

                    <p id="notice" className="text-orange-600 py-4 text-xs">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</p>
                        If you have questions or comments about this notice, you may email us at kitchendiary@gmail.com.

                    <p id="review" className="text-orange-600 py-4 text-xs">14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</p>
                        Based on the applicable laws of your country, you may have the right to request access to thee personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please submit a request by <Link to="#" className="text-blue-400 text-xs">CONTACT US..</Link>


                    <h3 className="text-orange-600 py-4 text-xs font-semibold">USER REVIEWS</h3>

                        Discover how people use KitchenDiary and beneficial they found it

                    <p className="text-orange-600 py-4 text-xs">USER A</p>
                        I am really happy with this App. The way I easily find recipes is amazing. I wanted.a Nigerian meals and the App recommended plenty of them. It even allowed me to make my personal contribution.
                        The only reason i am not giving it five star is because there is no search engine

                    <p className="text-orange-600 py-4 text-xs">USER B</p>
                        The app works nice and I found it to be of great help while looking for a recipe online. It saves me a lot of time and energy.
                        The only problem is its limited varieties of recipes though with time and user contributions, it will be okay.

                    <p className="text-orange-600 py-4 text-xs">USER C</p>
                        This App is great as it allows me to create, search and print out any recipe therein for my future use. I wish it had a mobile App version.

                    <p className="text-orange-600 py-4 text-xs">USER D</p>
                        This has been my favorite site for recipes for years! It was recommended by a friend and since then, man, it has been great. My suggestion, though, for a saved recipe, a separate folder should be created to organize all saved recipes. That will make things easier.

                    <p className="text-orange-600 py-4 text-xs">USER E</p>
                        This App is nice. I can cook any dish of my choice with proper guidance and ingredients at no cost. I really recommend it to anybody looking for how to make a delicious meal.

                    <p className="text-orange-600 py-4 text-xs">USER F</p>
                        The health rating of meals here is remarkable. The calorie counts and a breakdown of fats, protein, sugar cholesterol etc is helpful in making a healthier meal.



                    <h3 className="text-orange-600 py-4 text-lg font-bold">Print a recipe</h3>

                        <Link to="#" className="text-blue-400">Create an account</Link> to get access to various recipes that can be printed on a simple cards

                    <h3 className="text-orange-600 py-4 text-xl font-bold">Have a story to share?</h3>

                        Your stories and feedback on how you use our recipes and their results are very welcome. Let’s hear you <Link to="#" className="text-blue-400">here</Link>

            </div>
       </div>
     );
}

export default PrivacyPolicy;
