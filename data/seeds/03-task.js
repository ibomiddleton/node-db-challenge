exports.seed = function(knex, Promise) {
    return knex('task').insert([   
    { task_description: "Make a list of taks to complete",
      task_notes: "No notes",
      project_id: 1,
      task_complete: 1  
    },
    { task_description: "Study YouTube video on building desks",
      task_notes: "No notes",
      project_id: 2,
      task_complete: 0 
    },
    { task_description: "Jam out on piano",
      task_notes: "No notes",
      project_id: 3,
      task_complete: 0 
    },
    { task_description: "Create rifts on guitar",
      task_notes: "No notes",
      project_id: 3,
      task_complete: 0
    },
    { task_description: "Head to Home Depot to pick up suppies",
      task_notes: "No notes",
      project_id: 2,
      task_complete: 1
    },
  ]);
};