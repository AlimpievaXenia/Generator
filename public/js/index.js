const button = document.getElementsByClassName('add');

button.addEventListener('click', async (e) => {
  const {
    type, activity, participants,
  } = e.target;
  const body = {
    type,
    activity,
    participants,
    isCreateByUser: false,
  };

  await fetch('/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      body: JSON.stringify(body),
    },
  });
  button.remove();
});
