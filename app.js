let technologies_box = document.querySelector('.technologies_list');
let technologies_arr = ['HTML/CSS', 'SCSS', 'JavaScript', 'TypesScript', 'React', 'some tech'];
let tech_name = '';
let projects_box = document.querySelector('.main__projects');
let projects_arr = ['Calculator', 'Sea Battle', 'To Do List', 'Weather App'];
let project_name = '';

  for(let i = 0; i < technologies_arr.length; i++) {
    tech_name = technologies_arr[i];
    technologies_box.insertAdjacentHTML('beforeend', `<div data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="technologies">${tech_name}</div>`)
  }

  for(let i = 0; i < projects_arr.length; i++) {
    project_name = projects_arr[i];
    projects_box.insertAdjacentHTML('beforeend', `<div data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="projects">${project_name}</div>`)
  }

