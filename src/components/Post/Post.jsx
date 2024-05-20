import CoinSvg from "../Icons/CoinSvg"

import "./Post.css"
import Reshare from "../Icons/Reshare"
import Love from "../Icons/Love"
import Comments from "../Icons/Comments"
import Saved from "../Icons/Saved"
import { useRouteHead } from "../../contexts/RouteHeadContext"


const Post = ({post}) => {

  const {routeHead} = useRouteHead()
  return (
    <div className="container text-[#FFFFFF] w-[593px] mx-auto ml-[50px]">

    <div className="post_cont bg-[#1A1A1A] px-2 py-6 rounded-2xl">

        <div className="userInfo flex gap-2 pl-2 pb-4">

             <img className="pro_img w-[58px] h-[58px] rounded-[10px]" src={post.photo_url} alt="" />

        <div className="names">

            <p className="text-[20px] disName">{routeHead === "Feed" ? post.author_display_name : `${post.author_display_name} // ${post.group_name}`}</p>
            <p className="text-[12px] userName text-[#878787]">{post.author_user_name}</p>
        </div>



        </div>

        <p className="mb-11 pl-2 text-[14px] font-normal">{post.caption}</p>

        <img className="w-[573px] mx-auto rounded-lg" src={post.photo_url} alt="" />
<div className="post_inter_cont flex justify-center">

    <div className="post_interaction flex gap-12 items-center mt-9 mx-auto">

        <div className="post_info">

          <CoinSvg/>
          <p className="p_info_text">{post.raised_qcoins}</p>
        </div>

        <div className="post_info">

          <Reshare/>
          <p className="p_info_text pt-[3px]">{post.ib_share}</p>
        </div>

        <div className="post_info relative top-[-15px]">

          <Love/>
          <p className="p_info_text top-[48px] mr-[4px] absolute">{post.likes}</p>
        </div>

        <div className="post_info">

          <Comments/>
          <p className="p_info_text">{post.comments}</p>
        </div>

        <div className="post_info">

          <Saved/>
          <p className="p_info_text">{post.saved_quantity}</p>
        </div>
            
        </div>
</div>
        

       
    </div>
    
    </div>
  )
}

export default Post