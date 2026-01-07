type TrueRecord = Record<string, true>;

export namespace Root {
	export namespace Language {
		export namespace Item {
			export namespace Instance {
				export interface Data {
					code: string;
					label: string;
				}

				export interface Node {
					$data: Data;
				}
			}

			export interface Node {
				[id: string]: Instance.Node;
			}
		}

		export interface Node {
			item: Item.Node;
		}
	}

	export namespace Team {
		export namespace Person {
			export namespace Item {
				export namespace Instance {
					export interface Data {
						code: string;
						priority: number;
						home: string | null;
						avatar: string;
						category: TrueRecord;
						area: TrueRecord;
					}

					export interface Node {
						$data: Data;
					}
				}

				export interface Node {
					[id: string]: Instance.Node;
				}
			}

			export interface Node {
				item: Item.Node;
			}
		}

		export namespace Category {
			export namespace Item {
				export namespace Instance {
					export namespace Profile {
						export namespace I18n {
							export interface Data {
								label: string;
							}

							export interface Node {
								$data: Data;
							}
						}

						export interface Node {
							[lang: string]: I18n.Node;
						}
					}

					export interface Data {
						code: string;
						priority: number;
					}

					export interface Node {
						$data: Data;
						profile: Profile.Node;
					}
				}

				export interface Node {
					[id: string]: Instance.Node;
				}
			}

			export interface Node {
				item: Item.Node;
			}
		}

		export interface Node {
			person: Person.Node;
			category: Category.Node;
		}
	}

	export interface Node {
		language: Language.Node;
		team: Team.Node;
	}
}
