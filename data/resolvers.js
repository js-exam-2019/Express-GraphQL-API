let connect = require('../data/mongoConnector').connect;
let disconnect = require('../data/mongoConnector').disconnect;
let connection = require('../data/mongoConnections').dev;

let userFacade = require('../facade/userFacade');
let loginFacade = require('../facade/loginFacade');
let locationBlogFacade = require('../facade/locationBlogFacade');

connect(connection);

const resolvers = {
	Query: {
		// User Queries
		getAllUsers: async () => {
			return await userFacade.getAll();
		},
		getUserByID: async (_, { _id }) => {
			return await userFacade.getByID(_id);
		},
		getUserByUsername: async (_, { username }) => {
			return await userFacade.getByUsername(username);
		},

		// Location Blog Queries
		getAllLocationBlogs: async () => {
			return await locationBlogFacade.getAll();
		},
		getLocationBlogByID: async (_, { _id }) => {
			return await locationBlogFacade.getByID(_id);
		},
		getLocationBlogByInfo: async (_, { info }) => {
			return await locationBlogFacade.getByInfo(info);
		}

		// Position Queries
	},
	Mutation: {
		// User Mutations
		createUser: async (_, { input }) => {
			return await userFacade.add(
				input.firstName,
				input.lastName,
				input.username,
				input.password,
				input.email
			);
		},

		login: async (_, { input }) => {
            return await loginFacade.login(
                input.username,
				input.password,
				input.longitude,
				input.latitude,
				input.distance
                );
		},

		// Location Blog Mutations
		createLocationBlog: async (_, { input }) => {
			return await locationBlogFacade.add(input.info, input.pos, input.author);
		},

		likeLocationBlog: async (_, { userId, locationId }) => {
			return await locationBlogFacade.like(userId, locationId);
		}
	}
};

module.exports = { resolvers };
