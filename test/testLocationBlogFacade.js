const expect = require('chai').expect;

let connect = require('../data/mongoConnector').connect;
let disconnect = require('../data/mongoConnector').disconnect;
let connection = require('../data/mongoConnections').test;

let User = require('../models/user');
let userFacade = require('../facade/userFacade');

let LocationBlog = require('../models/locationBlog');
let locationBlogFacade = require('../facade/locationBlogFacade');

describe('Testing Location Blog Facade', () => {
	before(async () => {
		await connect(connection);
		await User.deleteMany({});
		await LocationBlog.deleteMany({});

		testUser = await User.insertMany([
			{
				firstName: 'Marc',
				lastName: 'Marcsen',
				username: 'marc',
				password: 'test',
				email: 'marc@mail.com'
			}
		]);

		await LocationBlog.insertMany([
			{
				info: 'Location A',
				pos: { longitude: 1111, latitude: 2222 },
				author: testUser[0]._id
			},
			{
				info: 'Location B',
				pos: { longitude: 3333, latitude: 4444 },
				author: testUser[0]._id
			}
		]);
	});

	after(async () => {
		await User.deleteMany({});
		await LocationBlog.deleteMany({});
		disconnect();
	});

	/*beforeEach(() => {
		console.log("Sets up test environment before individual");
	});

	afterEach(() => {
		console.log("Sets test environment after individual");
	}); */

	it('should add a location blog', async () => {
		const locations = await locationBlogFacade.getAll();
		expect(locations).not.to.be.empty;
	});
	
	it('should add a location blog', async () => {
		const locations = await locationBlogFacade.getByInfo('Location A');
		expect(locations).not.to.be.empty;
	});

	it('should add a location blog', async () => {
		let locations = await locationBlogFacade.getByInfo('Location A');
		expect(locations).not.to.be.empty;
	});

	it('should add a location blog', async () => {
		const user = await userFacade.getByUsername('marc');
		const location = await locationBlogFacade.add(
			'Location C',
			{ longitude: 5555, latitude: 6666 },
			user._id
		);
		expect(location).not.to.be.null;
	});

	it('should add a like to a location blog', async () => {
		const user = await userFacade.getByUsername('marc');
		const locations = await locationBlogFacade.getByInfo('Location A');
		await locationBlogFacade.like(user._id, locations[0]._id);
		const res = await locationBlogFacade.getByInfo('Location A');
		expect(res[0].likedBy.length).to.be.equal(1);
	});
});
