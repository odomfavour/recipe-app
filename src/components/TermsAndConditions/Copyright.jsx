import React from 'react'

const Copyright = () => {
    return (
        <div className="flex flex-col gap-6 text-sm sm:text-base lg:text-xl font-normal text-[#474747] leading-5 lg:leading-[30px]">
            <div>
                <div>
                    We respect the intellectual property rights of others. It is
                    Our policy to respond to any claim that Content posted on
                    the Service infringes a copyright or other intellectual
                    property infringement of any person.
                </div>
                <div>
                    If You are a copyright owner, or authorized on behalf of
                    one, and You believe that the copyrighted work has been
                    copied in a way that constitutes copyright infringement that
                    is taking place through the Service, You must submit Your
                    notice in writing to the attention of our copyright agent
                    via email and include in Your notice a detailed description
                    of the alleged infringement.
                </div>
            </div>

            <div>
                You may be held accountable for damages (including costs and
                attorneys&apos; fees) for misrepresenting that any Content is
                infringing Your copyright
            </div>

            <div>
                DMCA Notice and DMCA Procedure for Copyright Infringement Claims
            </div>

            <div>
                You may submit a notification pursuant to the Digital Millennium
                Copyright Act (DMCA) by providing our Copyright Agent with the
                following information in writing{' '}
            </div>

            <div className="flex flex-col gap-0">
                <div className="-mt-2">
                    <span className="text-xl mr-0 lg:text-4xl lg:-mr-2 ">
                        ●{' '}
                    </span>{' '}
                    An electronic or physical signature of the person authorized
                    to act on behalf of the owner of the copyright&apos;s
                    interest.
                </div>
                <div className="-mt-2">
                    <span className="text-xl mr-0 lg:text-4xl lg:-mr-2 ">
                        ●{' '}
                    </span>{' '}
                    A description of the copyrighted work that You claim has
                    been infringed, including the URL (i.e., web page address)
                    of the location where the copyrighted work exists or a copy
                    of the copyrighted work.{' '}
                </div>
                <div className="-mt-2">
                    <span className="text-xl mr-0 lg:text-4xl lg:-mr-2 ">
                        ●{' '}
                    </span>{' '}
                    Identification of the URL or other specific location on the
                    Service where the material that You claim is infringing is
                    located.
                </div>
                <div className="-mt-2">
                    {' '}
                    <span className="text-xl mr-0 lg:text-4xl lg:-mr-2 ">
                        ●{' '}
                    </span>{' '}
                    Your address, telephone number, and email address.
                </div>
                <div className="-mt-2">
                    {' '}
                    <span className="text-xl mr-0 lg:text-4xl lg:-mr-2 ">
                        ●{' '}
                    </span>{' '}
                    A statement by You that You have a good faith belief that
                    the disputed use is not authorized by the copyright owner,
                    its agent, or the law.{' '}
                </div>{' '}
                <div className="-mt-2">
                    <span className="text-xl mr-0 lg:text-4xl lg:-mr-2 ">
                        ●{' '}
                    </span>{' '}
                    A statement by You, made under penalty of perjury, that the
                    above information in Your notice is accurate and that You
                    are the copyright owner or authorized to act on the
                    copyright owner&apos;s behalf.
                </div>
            </div>

            <div>
                You can contact our copyright agent via email. Upon receipt of a
                notification, the Company will take whatever action, in its sole
                discretion, it deems appropriate, including removal of the
                challenged content from the Service.
            </div>
        </div>
    )
}

export default Copyright
