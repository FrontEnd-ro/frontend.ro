import React from 'react';
import { connect } from '@steal-like-a-dev/react-redux';
import { Link } from '@steal-like-a-dev/react-router';

import { loadNotificationsSuccess, markNotificationAsRead, markNotificationAsUnread, markAllAsRead } from 'Redux/user/user.actions';
import NotificationService from 'Services/Notification.service';
import { timePassedFromTimestamp } from 'Services/Utils';

import Tooltip from '../../../Tooltip';
import Scroll from '../../../scroll/Scroll';
import LoadingNotification from './loading-notification/LoadingNotification.component';

import './NotificationsTooltip.style.scss';

class NotificationsTooltip extends Tooltip {
    constructor(props) {
        super(props);

        this.state = {
            isFetchingNextPage: false,
            hasAnotherPage: true
        }

        this.pageNumber = 0;

        this.toggleRef = React.createRef();
        this.markAsRead = this.markAsRead.bind(this);
        this.markAllAsRead = this.markAllAsRead.bind(this);
        this.loadNextPage = this.loadNextPage.bind(this);
    }

    init() {
        NotificationService.getNotifications(this.pageNumber).then(resp => {
            this.props.dispatch(loadNotificationsSuccess(resp));
        });
    }

    markAsRead(id) {
        const { notifications } = this.props.user;

        if (notifications.list.find(n => n.id === id).isUnread) {
            NotificationService.markAsRead(id)
                .then(() => this.props.dispatch(markNotificationAsRead(id)))
                .catch(err => this.props.dispatch(markNotificationAsUnread(id)));
        }
    }

    markAllAsRead() {
        NotificationService.markAllAsRead().then(() => this.props.dispatch(markAllAsRead()));
    }

    loadNextPage() {
        this.setState({
            isFetchingNextPage: true
        });
        this.pageNumber++;

        return NotificationService.getNotifications(this.pageNumber).then(resp => {
            this.props.dispatch(loadNotificationsSuccess(resp));
            this.setState({
                isFetchingNextPage: false
            });
            if (resp.rows.length === 0) {
                this.setState({ hasAnotherPage: false });
            }
        });
    }

    render() {
        const { user } = this.props;
        const { isFetchingNextPage, hasAnotherPage } = this.state;

        const notifications = user.notifications.list || [];

        return (
            <div style={{ display: !notifications.length ? 'none' : 'initial' }} className="header-tooltip notifications-tooltip">
                <div className="icon" ref={this.toggleRef}>
                    <i className={`${isFetchingNextPage ? 'icon-spinner' : 'icon-bell'}`} />
                    {user.notifications.unreadCount > 0 && <span className="badge"> {user.notifications.unreadCount} </span>}
                </div>
                {this.state.isOpen && (
                    <Scroll hasInfiniteScroll={hasAnotherPage} onEndReach={this.loadNextPage}>
                        <ul className="notifications">
                            <li>
                                <button id="markAllAsReadBtn" onClick={this.markAllAsRead}>
                                    Mark all as read
                                </button>
                            </li>
                            {notifications.map(({ id, username, name, avatarUrl, message, timestamp, url, isUnread }) => (
                                <li key={id} className={isUnread ? 'is--unread' : ''} onClick={() => this.markAsRead(id)}>
                                    <Link to={url}>
                                        <img src={avatarUrl} />
                                        <div className="body">
                                            <p className="message">
                                                <span className="user">{name || username}</span> {message}
                                            </p>
                                            <span className="time">{timePassedFromTimestamp(new Date(timestamp).getTime())}</span>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                            {this.state.isFetchingNextPage && (
                                <React.Fragment>
                                    <LoadingNotification />
                                    <LoadingNotification />
                                    <LoadingNotification />
                                    <LoadingNotification />
                                    <LoadingNotification />
                                </React.Fragment>
                            )}
                        </ul>
                    </Scroll>
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(NotificationsTooltip);
