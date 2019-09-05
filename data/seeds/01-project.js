exports.seed = function(knex, Promise) {
    return knex('project').insert([   
    { project_name: 'Start Project',
      project_description: "Get motivated to begin project!",
      project_complete: 1 
    },
    { project_name: 'Build Desk',
      project_description: "Get materials and get buildin!",
      project_complete: 0 
    },
    { project_name: 'Create Song',
      project_description: "Create lyrics, chords, and get recordin!",
      project_complete: 1 
    },
  ]);
};
  