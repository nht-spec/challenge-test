import {
	Button,
	Drawer,
	Dropdown,
	Layout,
	Menu,
	Modal,
	Popconfirm,
	Popover,
	Space,
	Typography,
} from 'antd';
import ResizeObserver from 'rc-resize-observer';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PullToRefresh from 'react-simple-pull-to-refresh';
import Breadcrumbs from '../components/shared/Breadcrumbs';
import { itemsMenu } from '../constants/items-menu';
import useGetView from '../hooks/useGetView';
import { useView } from '../hooks/useView';
import React from 'react';
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	MoreOutlined,
} from '@ant-design/icons';
function MainLayout(props) {
	const [width, setWith] = useState(0);
	const [collapsed, setCollapsed] = useState(false);
	const [viewMode, setViewMode] = useView();
	const { setView } = useGetView();
	const { children, searchHeader } = props;
	const { Header, Content, Footer } = Layout;
	const { Title } = Typography;
	const [val, setVal] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	const pathname = location.pathname.split('/');

	const onClick = (e) => {
		if (e.key) {
			navigate(`/${e.key}`, { replace: true });
		}

		if (e.key && width < 850) {
			navigate(`/${e.key}`, { replace: true });
			setCollapsed(!collapsed);
		}
	};

	if (val) {
		window.location.reload();
	}

	if (!navigator.onLine) {
		const error = () => {
			Modal.error({
				centered: true,
				title: 'Network error!!',
				content: 'Please check your internet connection',
				onOk() {
					window.location.reload();
				},
			});
		};
		error();
	}

	const content = () => {
		return (
			<>
				{searchHeader}

				<Button
					style={{ marginTop: '10px' }}
					onClick={() => setViewMode(!viewMode)}
					type='primary'
				>
					{!viewMode ? 'List View' : 'Grid View'}
				</Button>
			</>
		);
	};

	useEffect(() => {
		setView(viewMode);
	}, [viewMode]);

	return (
		<PullToRefresh
			onRefresh={() => new Promise((resolve) => resolve(setVal(true)))}
		>
			<ResizeObserver
				onResize={({ width }) => {
					setWith(width);
				}}
			>
				<Layout className='layout'>
					<Header className='page-header'>
						{width < 850 &&
							React.createElement(
								collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
								{
									className: 'trigger',
									onClick: () => setCollapsed(!collapsed),
								}
							)}

						<Link to={'/now-playing'}>
							<div className='logo'>
								<img
									style={{ width: '31px', height: '31px' }}
									src={require('../assets/images/video-player.png')}
								/>
								<Title style={{ marginLeft: '10px' }} level={4}>
									Movie Chanel
								</Title>
							</div>
						</Link>

						{width >= 850 && (
							<Menu
								theme='light'
								mode='horizontal'
								onClick={onClick}
								defaultSelectedKeys={pathname[1]}
								items={itemsMenu}
								selectedKeys={pathname[1]}
							/>
						)}

						<Drawer
							placement='left'
							closable={true}
							onClose={() => setCollapsed(false)}
							visible={collapsed}
							width={300}
							title='Movie Chanel'
						>
							<Menu
								onClick={onClick}
								theme='light'
								mode='inline'
								defaultSelectedKeys={pathname[1]}
								items={itemsMenu}
								selectedKeys={pathname[1]}
							/>
						</Drawer>

						<Space align='center'>
							{width >= 850 ? (
								<>
									<div className='search-header'>{searchHeader}</div>
									<div className='switch-between-view'>
										<Button
											onClick={() => setViewMode(!viewMode)}
											type='primary'
										>
											{!viewMode ? 'List View' : 'Grid View'}
										</Button>
									</div>
								</>
							) : (
								<Popover
									content={content}
									placement='bottomRight'
									trigger='click'
								>
									<Button icon={<MoreOutlined />} />
								</Popover>
							)}
						</Space>
					</Header>

					<Content
						style={{
							padding: '0 50px',
						}}
					>
						<Breadcrumbs children={itemsMenu} />
						<div className='site-layout-content'>{children}</div>
					</Content>

					<Footer
						style={{
							textAlign: 'center',
						}}
					>
						Ant Design ©2018 Created by Ant UED
					</Footer>
				</Layout>
			</ResizeObserver>
		</PullToRefresh>
	);
}

export default MainLayout;
