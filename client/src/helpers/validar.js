export const validar = (input) => {
	let errors = {};
	if (input.name.length < 4 || input.name.length >= 25) {
		errors.name = 'The name must be between 4 and 25 letters';
	}
	if (input.image === '') {
		errors.image = 'You must complete this field';
	}
	if (input.hp <= 0) {
		errors.hp = 'Hp must be greater than 0';
	}
	if (input.attack <= 0) {
		errors.attack = ' Attack must be greater than 0';
	}
	if (input.defence <= 0) {
		errors.defence = 'Defence must be greater than 0';
	}
	if (input.speed === '') {
		errors.speed = 'You must complete this field';
	}
	if (input.height <= 0) {
		errors.height = 'Hegith must be greater than 0';
	}
	if (input.weight === '') {
		errors.weight = 'Weight must be greater than 0';
	}
	if (input.types.lenght <= 0) {
		errors.types = 'select at least one type';
	}

	return errors;
};
