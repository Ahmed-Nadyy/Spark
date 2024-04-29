import SideNavForum from './SideNavForum';
import "./Groups.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUsers, faComments } from '@fortawesome/free-solid-svg-icons';

const jsonData = {
    "subforums": [
      {
        "title": "Programming",
        "rows": [
          {
            "title": "JavaScript Frameworks Comparison",
            "content": "Discuss and compare various JavaScript frameworks like React, Angular, and Vue.",
            "posts": 92,
            "topics": 38,
            "lastPostBy": "CodeNinja",
            "lastPostDate": "28 Apr 2024"
          },
          {
            "title": "Python Data Science Libraries",
            "content": "Explore the latest trends and best practices in using Python libraries for data science.",
            "posts": 78,
            "topics": 29,
            "lastPostBy": "DataGeek",
            "lastPostDate": "27 Apr 2024"
          },
          {
            "title": "Web Development Tools and Tips",
            "content": "Share useful tools, tips, and tricks for web development.",
            "posts": 115,
            "topics": 51,
            "lastPostBy": "WebDevPro",
            "lastPostDate": "26 Apr 2024"
          },
          {
            "title": "Mobile App Development Challenges",
            "content": "Discuss challenges faced in mobile app development and how to overcome them.",
            "posts": 63,
            "topics": 22,
            "lastPostBy": "AppDevGuru",
            "lastPostDate": "25 Apr 2024"
          },
          {
            "title": "JavaScript Frameworks Comparison",
            "content": "Discuss and compare various JavaScript frameworks like React, Angular, and Vue.",
            "posts": 92,
            "topics": 38,
            "lastPostBy": "CodeNinja",
            "lastPostDate": "28 Apr 2024"
          },
          {
            "title": "Python Data Science Libraries",
            "content": "Explore the latest trends and best practices in using Python libraries for data science.",
            "posts": 78,
            "topics": 29,
            "lastPostBy": "DataGeek",
            "lastPostDate": "27 Apr 2024"
          },
          {
            "title": "Web Development Tools and Tips",
            "content": "Share useful tools, tips, and tricks for web development.",
            "posts": 115,
            "topics": 51,
            "lastPostBy": "WebDevPro",
            "lastPostDate": "26 Apr 2024"
          },
          {
            "title": "Mobile App Development Challenges",
            "content": "Discuss challenges faced in mobile app development and how to overcome them.",
            "posts": 63,
            "topics": 22,
            "lastPostBy": "AppDevGuru",
            "lastPostDate": "25 Apr 2024"
          }
        ]
      }
    ]
  };
  
  function SubforumRow(props) {
    return (
      <div className="subforum-row">
        <div className="subforum-description subforum-column">
          <h4><a href="#">{props.title}</a></h4>
          <p>{props.content}</p>
        </div>
        <div className="subforum-stats subforum-column center">
          <span>{props.posts} Posts | {props.topics} Topics</span>
        </div>
        <div className="subforum-info subforum-column">
          <b><a href="#">Last post</a></b> by <a href="#">{props.lastPostBy}</a>
          <br />on <small>{props.lastPostDate}</small>
        </div>
      </div>
    );
  }

const Forums = () => {
    return (
        <>
            <SideNavForum />
            <div className='profileContain'>
                <div className="profile-img">
                    <div className="profileimg"></div>
                    <button className='leaveGroup'>Leave Group</button>
                    <div className="typeActive d-flex align-items-center gap-3">
                        <p className='typePro'>Public Group</p>
                        <p className='activePro'>Active <span>13 hours ago</span></p>
                    </div>
                </div>
                <div class="titleGroup d-flex align-items-center gap-3">
                    <h2>Programmers</h2>
                    <ul class="profile-nav d-flex align-items-center gap-3">
                        <li class="bp-groups-tab">
                            <a className='linkLog'>
                                <FontAwesomeIcon icon={faComments} />
                                <span class="nav-link-text">Forums</span>
                            </a>
                        </li>
                        <li class="bp-groups-tab">
                            <a className='linkLog'>
                                <FontAwesomeIcon icon={faUsers} />
                                <span class="nav-link-text">Members</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mainGroups px-4">
                <nav className='ulGroup mb-4 px-0'>
                    <ul className='d-flex gap-3 list-unstyled'>
                        <li><a className='groupLink activeLink' href="#">Topics</a></li>
                    </ul>
                    <form method="get">
                        <input id="dir-groups-search" name="groups_search" type="search" placeholder="Search" />
                        <button className='groupButton' type="submit" name="dir_groups_search_submit"><FontAwesomeIcon icon={faSearch} /></button>
                    </form>
                </nav>
            </div>
            <div className="subforum">
                {jsonData.subforums.map((subforum, index) => (
                    <div key={index}>
                        <div className="subforum-title">
                            <h1>{subforum.title}</h1>
                        </div>
                        {subforum.rows.map((row, rowIndex) => (
                            <SubforumRow
                                key={rowIndex}
                                title={row.title}
                                content={row.content}
                                posts={row.posts}
                                topics={row.topics}
                                lastPostBy={row.lastPostBy}
                                lastPostDate={row.lastPostDate}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Forums