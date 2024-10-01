import { IoLocationOutline } from 'react-icons/io5'
import {
  RiGitRepositoryFill,
  RiUserFollowFill,
  RiUserFollowLine,
} from 'react-icons/ri'
import { FaXTwitter } from 'react-icons/fa6'
import { TfiThought } from 'react-icons/tfi'
import { FaEye } from 'react-icons/fa'

const ProfileInfo = () => {
  const userProfile = {
    avatar_url:
      'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745',
    bio: '👨🏻‍💻👨🏻‍💻👨🏻‍💻',
    email: 'johndoe@gmail.com',
    followers: 100,
    following: 200,
    html_url: 'https://github.com/burakorkmez',
    location: 'Somewhere, Earth',
    name: 'John Doe',
    public_gists: 100,
    public_repos: 100,
    twitter_username: 'johndoe',
    login: 'johndoe',
  }
  return (
    <div className="lg:w-1/3 w-full flex flex-col gap-2 md:sticky md:top-10">
      <div className="bg-glass rounded-lg p-4">
        <div className="flex gap-3 items-center">
          <a href={userProfile?.html_url} target="_blank" rel="noreferrer">
            <img
              className="rounded-md w-24 h-24 mb-2"
              src={userProfile?.avatar_url}
              alt={userProfile?.name}
            />
          </a>
          <div className="flex flex-col items-center gap-2">
            <a
              href={userProfile?.html_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-medium w-full text-xs p-2 rounded-md
              bg-glass cursor-pointer border border-blue-400"
            >
              <FaEye size={16} />
              View on Github
            </a>
          </div>
        </div>

        {/* User Bio */}
        {userProfile?.bio ? (
          <div className="flex items-center gap-2">
            <TfiThought />
            <p className="text-sm">{userProfile?.bio.substring(0, 60)}...</p>
          </div>
        ) : null}

        {/* Location */}
        {userProfile?.location ? (
          <div className="flex items-center gap-2">
            <IoLocationOutline />
            {userProfile?.location}
          </div>
        ) : null}

        {/* Twitter Username */}
        {userProfile?.twitter_username ? (
          <div className="flex items-center gap-2">
            <FaXTwitter />
            <a
              href={`https://twitter.com/${userProfile.twitter_username}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-sky-500"
            >
              {userProfile?.twitter_username}
            </a>
          </div>
        ) : null}

        {/* Member Since Date */}
        <div className="my-2">
          <p className="text-gray-600 font-bold text-sm">Member Since</p>
          <p>September 21, 2024</p>
        </div>

        {/* Email Address */}
        {userProfile?.email && (
          <div className="my-2">
            <p className="text-gray-600 font-bold text-sm">Email Address</p>
            <p>{userProfile?.email}</p>
          </div>
        )}

        {/* Full Name */}
        {userProfile?.name && (
          <div className="my-2">
            <p className="text-gray-600 font-bold text-sm">Full name</p>
            <p>{userProfile?.name}</p>
          </div>
        )}

        {/* Username */}
        <div className="my-2">
          <p className="text-gray-600 font-bold text-sm">Username</p>
          <p>{userProfile?.login}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mx-4 ">
        {/* Followers Count */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
          <RiUserFollowFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Followers: {userProfile?.followers}</p>
        </div>

        {/* Following count */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
          <RiUserFollowLine className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Following: {userProfile?.following}</p>
        </div>

        {/* Number of public repos */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
          <RiGitRepositoryFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Public repos: {userProfile?.public_repos}</p>
        </div>

        {/* Number of public gists */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
          <RiGitRepositoryFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Public gists: {userProfile?.public_gists}</p>
        </div>
      </div>
    </div>
  )
}
export default ProfileInfo
