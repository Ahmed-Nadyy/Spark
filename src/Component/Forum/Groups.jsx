import React from 'react'
import "./Groups.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SideNavForum from './SideNavForum';

const GroupCard = () => {
    return (
        <li className='groupCard list-unstyled p-4'>
            <div className='coverImage'>
                <a><img className='logoGroup' width="80px" height="80px" alt="Group logo" src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/1/5e2c833173b84-bpfull.jpg" /></a>
            </div>
            <div>
                <div className='cardBody pt-5'>
                    <a className='groupLink'>Programmers</a>
                    <p className='groupPara'>Active <span>13 hours ago</span></p>
                    <ul className='membersGroup list-unstyled d-flex'>
                        <li><a><img src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/9/5e2ce3f5bcd91-bpthumb.jpg" width="35" height="35" /></a></li>
                        <li><a><img src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/9/5e2ce3f5bcd91-bpthumb.jpg" width="35" height="35" /></a></li>
                        <li><a><img src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/9/5e2ce3f5bcd91-bpthumb.jpg" width="35" height="35" /></a></li>
                        <li><a><img src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/9/5e2ce3f5bcd91-bpthumb.jpg" width="35" height="35" /></a></li>
                        <li><a><img src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/9/5e2ce3f5bcd91-bpthumb.jpg" width="35" height="35" /></a></li>
                    </ul>
                    <p className='groupMembers'>Public Group / 5 members</p>
                    <ul>
                        <li className='list-unstyled'><button className='joinBtn' title="Join Group">Join Group</button></li>
                    </ul>
                </div>
            </div>
        </li>
    );
};

const Groups = () => {
    return (
        <>
            <SideNavForum />
            <div className="mainGroups px-4">
                <nav className='ulGroup mb-4 px-0'>
                    <ul className='d-flex gap-3 list-unstyled'>
                        <li><a className='groupLink activeLink' href="#">All Groups <span className='groupSpan'>7</span></a></li>
                        <li><a className='groupLink' href="#">My Groups <span className='groupSpan'>2</span></a></li>
                    </ul>
                </nav>
                <div className='searchGroup'>
                    <form action="" method="get">
                        <input id="dir-groups-search" name="groups_search" type="search" placeholder="Search Groups..." />
                        <button className='groupButton' type="submit" name="dir_groups_search_submit"><FontAwesomeIcon icon={faSearch} /></button>
                    </form>
                    <select id="groups-order-by">
                        <option value="active">Last Active</option>
                        <option value="popular">Most Members</option>
                        <option value="newest">Newly Created</option>
                        <option value="alphabetical">Alphabetical</option>
                    </select>
                </div>
                <div>
                    <ul className='d-flex flex-wrap gap-5'>
                        <GroupCard />
                        <GroupCard />
                        <GroupCard />
                        <GroupCard />
                        <GroupCard />
                        <GroupCard />
                        <GroupCard />
                        <GroupCard />
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Groups
