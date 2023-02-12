import React from 'react'

export default function About(props) {

    return (
        <div>
            <div className={`container my-5 p-5 bg-${props.mode} text-${props.mode==='dark'? 'light' : 'dark'}`}>
                <h1 className="text-center mb-3">About Us</h1>
                <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel turpis velit. In hac habitasse platea dictumst. Nam congue blandit mi, ac pellentesque magna sollicitudin a. Integer eget neque et neque dictum posuere id in magna. Sed pellentesque quis enim in viverra. Curabitur lacinia, nulla a tempor sagittis, risus purus iaculis justo, eget sollicitudin enim est id magna. Fusce luctus congue nulla, eget euismod sem auctor vel. </p>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas commodo suscipit tortor, a bibendum lacus faucibus id. Nullam sit amet mi vel nisi malesuada faucibus. Sed quis nisi vel velit commodo sollicitudin. In vel ante vel velit commodo molestie. Fusce vel congue nulla, ac accumsan elit. Integer sit amet enim tellus. Donec blandit tempus mauris, vel aliquet magna iaculis eu. Integer vel velit vel velit luctus commodo. </p>
                <h2 className="text-center mb-3">Our Team</h2>
                <p className='lead'>Nulla facilisi. Vivamus non semper eros. Morbi non magna blandit, facilisis metus eu, tincidunt quam. Donec rhoncus sapien eget diam bibendum, a viverra elit congue. Aliquam et ipsum non nibh auctor interdum vel et nulla. Nam non erat in dolor egestas mollis eu vel velit. Proin vel urna vel risus malesuada convallis. Nullam blandit aliquet sem, eu auctor enim fringilla non. </p>
            </div>
        </div>
    )
}
