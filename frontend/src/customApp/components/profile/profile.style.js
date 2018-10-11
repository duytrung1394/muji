import styled from "styled-components";

const ProfileWrapper = styled.div`

.profile-frame { margin: 0; width: 100%; text-align: center; border-radius: 5px; border: 1px solid #ddd; overflow: hidden;},
.profile-frame a {text-decoration: none; padding: 20px 0; display: block; color: #333; background-color: #fff; },
.profile-frame h2 {font-size: 30px; margin-bottom 60px;},
.profile-frame ul{ display: flex; justify-content: center; list-style: none;},
.profile-frame caption {font-size: 5px; font-weight: 100; color: black; width: 85%; margin: 0 auto;},
.profile-image-group li {width: 15%; margin: 0 30px;},
.profile-image-group img {maxz-width: 100%; max-height:100px; margin:0;},
.profile-image-group figure {width: 100%; max-height:50%;},
.profile-image-group h3 {margin: 10px 0;font-size: large; font-weight: bold; color: #7f0019;line-height: 1.3em;},
`
export default ProfileWrapper;
