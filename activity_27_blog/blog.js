// open database 
use blog;

// create the collection
db.posts.insertMany(
[
    {
        "author" : "Sam Mai Tai",
        "created_at" : ISODate("2017-11-03T00:00:00Z"),
        "content" : "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.",
        "likes" : 12,
        "tags" : [
            "pessimist",
            "optimist"
        ]
    },
    {
        "author" : "Sam Mai Tai",
        "created_at" : ISODate("2017-11-03T09:30:00Z"),
        "content" : "Age is a case of mind over matter. If you don't mind, it doesn't matter.",
        "likes" : 10,
        "tags" : [
            "age",
            "optimist"
        ]
    },
    {
        "author" : "Sam Mai Tai",
        "created_at" : ISODate("2017-11-04T00:00:00Z"),
        "content" : "Failure will never overtake me if my determination to succeed is strong enough.",
        "likes" : 1,
        "tags" : [
            "optimist"
        ]
    },
    {
        "author" : "Morbid Mojito",
        "created_at" : ISODate("2017-11-04T00:00:00Z"),
        "content" : "Only I can change my life. No one can do it for me.",
        "tags" : [
            "life"
        ]
    },
    {
        "author" : "Morbid Mojito",
        "created_at" : ISODate("2017-11-07T00:00:00Z"),
        "content" : "Smile in the mirror. Do that every morning and you'll start to see a big difference in your life",
        "likes" : 1,
        "tags" : [
            "life",
            "optimist"
        ]
    }
])

db.posts.insert({
    author: "Bob"
});

// list all posts 
db.posts.find()

// list all posts from 'Sam Mai Tai'
db.posts.find(
    {
        author: 'Sam Mai Tai'
    }
)

// list only the content of all posts from 'Sam Mai Tai'
db.posts.find(
    {
        author: 'Sam Mai Tai'
    }, 
    {
        _id: 0,
        content: 1
    }
)

// list all posts in 2017-11-04
db.posts.find(
    {
        created_at: ISODate('2017-11-04')
    }
)

// list all posts that had at least 5 likes
db.posts.find(
    {
        likes: {
            $gte: 5
        }
    }
)

// list all posts from 'Morbid Mojito' that had less than 3 likes 
db.posts.find(
    {
        author: 'Morbid Mojito',
        likes: {
            $lt: 3
        }
    }
)

// list all posts from 'Morbid Mojito' that had less than 3 likes or didn't have any likes at all 
db.posts.find(
    {
        author: 'Morbid Mojito',
        $or: [
            {
                likes: { $lt: 3 }
            },
            {
                likes: { $exists: false }
            }
        ]
    }
)

// list all posts that have the word 'you' in its content 
// hint: use the $regex query operator 
db.posts.find(
    {
        content: {
            $regex: /you/
        }
    }
)

// list all posts of an author whose name ends with the letter 'o' or 'O' 
// hint: use the $regex query operator 
db.posts.find(
    {
        author: {
            $regex: /.*[oO]$/
        }
    }
)

// list all posts that have the tag 'optimist' 
// hint: search the documentation for how to “query an array” 
db.posts.find(
    {
        tags: 'optimist'
    }
)

// list all posts that have the tags 'optimist' and 'life' 
// hint: you might want to try the $all query operator or just use the $and query operator 

db.posts.find(
    {
        tags: {
            $all: ['optimist', 'life']
        }
    }
)

// list all posts that have the tags 'optimist' or 'life' 
// hint: use the $or query operator 
db.posts.find(
    {
        $or: [
            { tags: 'optimist' }, 
            { tags: 'life' } 
        ]
    }
)

// list all posts that do not have the tag 'age' 
// hint: use the $nin query operator 
db.posts.find(
    {
        tags: {
            $nin: ['age']
        }
    }
)

// list all posts that only have one tag 
// hint: use the $size query operator 
db.posts.find(
    {
        tags: {
            $size: 1
        }
    }
)