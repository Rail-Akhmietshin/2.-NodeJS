const db = require('./db');

const { DataTypes } = require('sequelize')

const Movie = db.define(
    'movie',
    {
        movie_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        movie_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        world_year_release: {
            type: DataTypes.SMALLINT,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
);

const Genre = db.define(
    'genre',
    {
        genre_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        genre_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
);

const MovieGenre = db.define(
    'movie_genre',
    {
        movie_genre_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        movie_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        genre_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    },
    {
        timestamps: false
    }
);

Movie.belongsToMany(Genre, {through: MovieGenre});
Genre.belongsToMany(Movie, {through: MovieGenre});

db.sync({logging : false})
    .then( () => console.log("Tables have been created"))
    .catch( err => console.log(err));


module.exports = {
    Movie,
    Genre
}


