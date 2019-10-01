exports.seed = function(knex, Promise) {
    return knex('resource').insert([   
    { resource_name: 'Jam Playlist',
      resource_description: "This playlist helps enjoy work!",
      project_id: 1
    },
    { resource_name: 'Home Depot',
      resource_description: "Need 2 pieces of 2x6 wood and 4 pieces of 2x4 wood.",
      project_id: 2
    },
    { resource_name: 'YouTube',
      resource_description: "Awesome video on how to build a desk!",
      project_id: 2
    },
    { resource_name: 'YouTube',
      resource_description: "Great videos with advice on music writing.",
      project_id: 3
    },
    { resource_name: 'Notebook',
      resource_description: "Plenty of unfinished songs to use.",
      project_id: 3
    },
  ]);
};