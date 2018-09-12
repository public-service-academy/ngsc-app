"""
Utilities to accept and parse command line arguments.
"""

import argparse
import functools
from typing import Any, Callable, Dict, List, NewType, Union


NoArgCommand = Callable[[], None]
DependencyCommand = Callable[[List[str]], None]
Command = Union[NoArgCommand, DependencyCommand]
CommandMap = NewType('CommandMap', Dict[str, Command])


# -----------------------------------------------------------------
# Check prereqs installed
# -----------------------------------------------------------------

def check_prereqs_installed() -> None:
    """
    Confirm all required software installed.
    """
    pass


# -------------------------------------
# Command line arguments
# -------------------------------------

def create_parser(command_map: CommandMap, *,
                  description: str) -> argparse.ArgumentParser:
    """
    Setups command line argument parser and assigns defaults and help statements.
    """
    parser = argparse.ArgumentParser(description=description,
                                     formatter_class=argparse.ArgumentDefaultsHelpFormatter)
    parser.add_argument('command',
                        default='run',
                        nargs='?',  # must specify 0-1 argument,
                        choices=command_map.keys(),
                        help='Command you want to run.')
    parser.add_argument('dependencies',
                        default='',
                        nargs='*',  # can specify 0-many arguments
                        help='Dependency(ies) you want to modify.')
    return parser


def execute_command(args: argparse.Namespace,
                    command_map: CommandMap) -> None:
    """
    Determines which command was passed and then executes the command.

    Passes any additional parameters, such as target environment or dependencies.
    """
    func = command_map[args.command]
    # convert arguments to dict
    passed_arguments = vars(args)
    # remove empty values
    additional_arguments = {k: v for k, v in passed_arguments.items() if v}
    # remove command
    del additional_arguments['command']
    # unpack additional arguments into function as named parameters
    func(**additional_arguments)  # type: ignore


# -------------------------------------
# Interactive CLI
# -------------------------------------

def ask_input(prompt: str, *, is_valid: Callable[[str], bool] = None) -> str:
    """

    """
    print(prompt)
    result = input()
    if is_valid is not None and not is_valid(result):
        print('Invalid input.\n')
        return ask_input(prompt, is_valid=is_valid)
    return result


def ask_yes_no(question: str, *, default: str = 'yes') -> bool:
    """
    Ask given prompt and expect Y or N as answer.
    """
    options = {'yes': True, 'y': True, 'ye': True,
               'no': False, 'n': False}
    # determine prompt
    if default is None:
        prompt = '[y/n]'
    elif default == 'yes':
        prompt = '[Y/n]'
    elif default == 'no':
        prompt = '[y/N]'
    else:
        raise ValueError(f'invalid default answer: {default}')
    # ask prompt
    print(f'{question} {prompt}')
    # interpret result
    choice = input().lower()
    if default is not None and choice == '':
        return options[default]
    if choice in options:
        return options[choice]
    else:
        print("Please respond with 'yes' or 'no' (or 'y' or 'n').\n")
        return ask_yes_no(question)


def ask_confirmation(instructions: str, *, default_to_yes: bool = False) -> None:
    """
    Ask for simple "yes" confirmation.
    """
    prompt = '[Y]' if default_to_yes else '[y]'
    options = ['yes', 'y', 'ye']
    print(f'{instructions}\n\nPlease confirm you have completed the above. {prompt}')
    # interpret result
    choice = input().lower()
    if choice not in options and not (default_to_yes and choice == ''):
        print("Please respond with 'yes' (or 'y').\n")
        return ask_confirmation(instructions)


def log(*, start_message: str = None, end_message: str = None) -> Callable[[Any], Any]:
    def decorate(func: Callable[[Any], Any]):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            if start_message is not None:
                print(start_message)
            result = func(*args, **kwargs)
            if end_message is not None:
                print(end_message)
            return result

        return wrapper

    return decorate
