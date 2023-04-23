import {faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import { ComponentProps } from "react";
import { LinksContainer } from "./styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

type LinksProps = ComponentProps<typeof LinksContainer> & {
	text:string;
};


export function Links({text,...rest}: LinksProps) {
	return(
		<LinksContainer	{...rest}>
			{text}
			<FontAwesomeIcon icon={faUpRightFromSquare}/>
			</LinksContainer>
	)
}